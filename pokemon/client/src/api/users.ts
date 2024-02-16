import { API_ROOT } from "../constants/apis";
import requestHandler from "../helpers/requestHandler";
import { User } from "../types/Users";

export const getUser = async (id: string) => {
  return await requestHandler<User>(`${API_ROOT}/users/${id}`, "GET", null);
};
