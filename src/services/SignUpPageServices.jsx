import { PostMethod } from "../utils/RequestUtil";
import { SIGNUP_URL } from "../utils/ConstantApiUtil";

const SubmitSignUpForm = async (data) => {
  const result = await PostMethod(SIGNUP_URL, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

export default SubmitSignUpForm;