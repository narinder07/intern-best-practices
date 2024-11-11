import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
  displayName: Yup.string()
    .required("Please enter your display name")
    .min(3, "Name length must be 3 characters")
    .matches(/^[A-Za-z\s]*$/, "Please enter valid characters"),
  username: Yup.string()
    .required("Please enter your name")
    .min(3, "Name length must be 3 characters")
    .matches(/^[A-Za-z\s]*$/, "Please enter valid characters"),
  email: Yup.string()
    .required("Please enter your email")
    .email("Please enter a valid email "),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .max(14, "Password cannot be more than 14 characters"),
  confirmPassword: Yup.string()
    .required("Please enter your confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
