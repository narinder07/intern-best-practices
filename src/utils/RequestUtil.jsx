import axios from "axios";
import { API_URL } from "./ConstantApiUtil";

export const PostMethod = async (url, bodyData, headers = null) => {
  try {
    const responseApi = await axios.post(API_URL + url, bodyData);
    return responseApi;
  } catch (error) {
    if (error.response && error.response.status) {
      return error.response.data;
    }
  }
};
