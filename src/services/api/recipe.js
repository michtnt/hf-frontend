import { api } from "../request";

export const getRecipes = async (data, callback) => {
  await api("GET", "/v1/recipe", data, true, callback);
};

export const getRecipe = async (data, params, callback) => {
  await api("GET", `/v1/recipe/${params}`, data, true, callback);
};

export const createRecipe = async (data, callback) => {
  await api("POST", "/v1/recipe", data, true, callback);
};

export const updateRecipe = async (data, params, callback) => {
  await api("PUT", `/v1/recipe/${params}`, data, true, callback);
};

export const deleteRecipe = async (data, params, callback) => {
  await api("DELETE", `/v1/recipe/${params}`, data, true, callback);
};

export const reviewRecipe = async (data, params, callback) => {
  await api("POST", `/v1/recipe/review/${params}`, data, true, callback);
};
