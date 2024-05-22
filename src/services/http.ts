import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import { getLocalStorage } from "../utils/localStorage";

// Create an Axios instance
const instance = axios.create({
  baseURL: "https://your-api-base-url.com", // Set your API base URL here if needed
  timeout: 10000, // Set a timeout if needed
});

// Request interceptor to add auth token
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getLocalStorage<string | null>("token", null);
    if (token && config.headers) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling errors
instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast.error("An unexpected error occurred.");
    } else if (expectedError) {
      toast.error(`An Error Occurred: ${error.message}`);
    }

    return Promise.reject(error);
  },
);

// Export the HTTP methods
const httpService = {
  get: instance.get,
  post: instance.post,
  patch: instance.patch,
  put: instance.put,
  delete: instance.delete,
};

export default httpService;
