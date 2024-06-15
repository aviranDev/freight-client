/* eslint-disable no-useless-catch */
import httpService from "./http";
import { jwtDecode } from "jwt-decode";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";

export interface Auth {
  username: string;
  password: string;
}

export interface SigninResponse {
  data: {
    token: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
  };
}

export const profile = async () => await httpService.get(`users/user-profile`);

export const signin = async (credentails: Auth) => {
  try {
    const response = await httpService.post(`/auth/login`, credentails);
    return response;
  } catch (error) {
    throw error;
  }
};

export const refreshtoken = async () => {
  try {
    const response = await httpService.get(
      `http://localhost:8181/api/auth/refresh-token`,
    );
    return response.data.accessToken;
  } catch (error) {
    throw error;
  }
};

export interface DecodedToken {
  exp: number;
  data: object;
  // Add any other properties your token might have
}

export const getCurrentUser = (): DecodedToken | null => {
  try {
    const jwt = getLocalStorage("token", null);
    if (!jwt) {
      return null;
    }
    const data = jwtDecode(jwt);
    const decodedToken: DecodedToken = {
      data: data || null, // Ensure exp is defined and assign it
      // Add other properties from your token as needed
    };
    setLocalStorage("user", decodedToken);
    return decodedToken;
  } catch {
    return null;
  }
};
