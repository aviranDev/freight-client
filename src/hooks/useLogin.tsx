import { useContext } from "react";
import { AuthContext } from "../context/LoginProvider";

const useLogin = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

export default useLogin;
