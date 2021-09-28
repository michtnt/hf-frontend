import axios from "axios";
import { SERVER_URL } from "./config";

// TODO need improvement
export const api = async (method, url, data = {}, authentication, callback) => {
  console.log(`${SERVER_URL}${url}`);
  let headers = { "Content-Type": "application/json" };

  if (authentication) {
    headers.authorization = `Bearer ${localStorage.getItem(
      "hf-frontend@token"
    )}`;
  }

  try {
    let response = await axios({
      method,
      url: `${SERVER_URL}${url}`,
      data,
      headers,
    });

    // return response.data;
    if (response) {
      callback(response.data);
    }
  } catch (e) {
    window.alert(e.response?.data?.message || "Something wrong");
    return false;
  }
};
