import axios from "axios";

export const PostMethod = async (url, bodyData, headers = null) => {
  try {
    const responseApi = await axios.post(url, bodyData);
    return responseApi;
  } catch (error) {
    if (error.response && error.response.status) {
      return error.response.data;
    }
  }
};
