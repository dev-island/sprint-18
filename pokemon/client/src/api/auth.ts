import { API_ROOT } from "../constants/apis";
import requestHandler from "../helpers/requestHandler";
import { User } from "../types/Users";

export type SignUpRequest = {
  username: string;
  password: string;
  email: string;
};

export type SignUpResponse = {
  user: User;
  token: string;
};

export const signUp = async ({ username, password, email }: SignUpRequest) => {
  return await requestHandler<SignUpResponse>(`${API_ROOT}/auth`, "POST", {
    username,
    password,
    email,
  });
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export const login = async ({ username, password }: LoginRequest) => {
  return await requestHandler<LoginResponse>(`${API_ROOT}/auth`, "PUT", {
    username,
    password,
  });
};
