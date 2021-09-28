import { api } from "../request";

export const signup = async (data, callback) => {
  await api("POST", "/auth/signup", data, true, callback);
};

export const login = async (data, callback) => {
  await api("POST", "/auth/login", data, true, callback);
};
