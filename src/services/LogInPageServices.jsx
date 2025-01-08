import { PostMethod } from "../utils/RequestUtil";
import { LOGIN_URL } from "../utils/ConstantApiUtil";

const LogInPageServices = async (data) => {
  const result = await PostMethod(LOGIN_URL, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      if (result.status == 201) {
        resolve(result.data);
      }
      resolve(result);
    }, 1000);
  });
};

export default LogInPageServices;
