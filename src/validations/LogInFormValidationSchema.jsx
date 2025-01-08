import * as Yup from "yup";

export const LogInFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .email("Please enter a valid email "),
  password: Yup.string()
    .required("Please enter your password")
    .max(14, "Password cannot be more than 13 characters"),
});
