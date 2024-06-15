import React, {
  useState,
  useEffect,
  createContext,
  Fragment,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";
import {
  signin,
  Auth,
  SigninResponse,
  DecodedToken,
  profile,
  refreshtoken as getNewAccessToken,
} from "../services/user";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../utils/localStorage";

const removeCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

interface LoginContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (data: Auth) => Promise<SigninResponse | any>;
  isLoggedIn: boolean;
  user: DecodedToken | null; // Include user in context
  logout: () => void; // Include logout in context
}

interface LoginProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<LoginContextProps | undefined>(
  undefined,
);

const AuthProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [user, setUser] = useState<DecodedToken | null>(() =>
    getLocalStorage("user", null),
  );
  const [credentials, setCredentials] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!user);

  /*   useEffect(() => {
    const fetchProfile = async () => {
      const response = await profile();
      setCredentials(response.data);
    };

    fetchProfile();
  }, [user]); */

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(async () => {
      const accessToken = getLocalStorage("accessToken", null);
      if (accessToken) {
        const decodedToken = jwtDecode<DecodedToken>(accessToken);
        const currentTime = Date.now() / 1000;

        console.log("Decoded Token Expiration Time (exp):", decodedToken.exp);
        console.log("Current Time:", currentTime);

        if (decodedToken.exp < currentTime) {
          console.log("Token has expired, attempting to refresh...");
          try {
            const response = await getNewAccessToken();

            setLocalStorage("accessToken", response);
            const newUser = jwtDecode<DecodedToken>(response);
            setLocalStorage("user", newUser);
            setUser(newUser);
          } catch (error) {
            console.log("logout");
            logout();
          }
        }
      }
      console.log("test");
    }, 2 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(interval);
  }, [user]);

  const login = async (data: Auth) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await signin(data);
      setLocalStorage("accessToken", response.data.accessToken);
      const decodedUser = jwtDecode<DecodedToken>(response.data.accessToken);
      setIsLoggedIn(true);
      setLocalStorage("user", decodedUser);
      setUser(decodedUser);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    removeCookie("jwt");
    removeLocalStorage("accessToken");
    removeLocalStorage("user");
    setUser(null);
    setIsLoggedIn(false);
    setCredentials({});
  };

  console.log("isLoggedIn: ", isLoggedIn);
  console.log("user: ", user);
  // console.log("credentials: ", credentials);

  return (
    <AuthContext.Provider value={{ login, isLoggedIn, logout, user }}>
      <Fragment>{children}</Fragment>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
