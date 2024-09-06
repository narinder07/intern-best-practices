import { PostMethod } from "../utils/RequestUtil";
import { SIGNUP_URL } from "../utils/ConstantApiUtil";

export const submitSignUpForm = async (data) => {
  const result = await PostMethod(SIGNUP_URL, data);

  if (result.status == "error") {
    console.log(result.data);
  }
};
