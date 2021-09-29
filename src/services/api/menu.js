import { api } from "../request";

export const getMenus = async (data, callback) => {
  await api("GET", "/v1/menu", data, true, callback);
};

export const getMenu = async (data, params, callback) => {
  await api("GET", `/v1/menu/${params}`, data, true, callback);
};

export const createMenu = async (data, callback) => {
  await api("POST", "/v1/menu", data, true, callback);
};

export const updateMenu = async (data, params, callback) => {
  await api("PUT", `/v1/menu/${params}`, data, true, callback);
};

export const deleteMenu = async (data, params, callback) => {
  await api("DELETE", `/v1/menu/${params}`, data, true, callback);
};

export const reviewMenu = async (data, params, callback) => {
  await api("POST", `/v1/menu/review/${params}`, data, true, callback);
};
