import axios from "./axios.config";

import { FormValues, LoginValues } from "../models/FormValues.d";

export const registerRequest = async (data: FormValues) =>
  axios.post("/auth/register", data);

export const loginRequest = async (data: LoginValues) =>
  axios.post("/auth/login", data);

export const verifyRequest = async (token?: string) => {
  return axios.get(`/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const logout = axios.post("/auth/logout");
