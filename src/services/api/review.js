import { api } from "../request";

export const createReview = async (data, params, callback) => {
  await api("POST", `/v1/review/${params}`, data, true, callback);
};
