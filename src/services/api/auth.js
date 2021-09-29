import { api } from "../request";

export const signup = async (data, callback) => {
  await api("POST", "/auth/signup", data, false, callback);
};

export const login = async (data, callback) => {
  await api("POST", "/auth/login", data, false, callback);
};
