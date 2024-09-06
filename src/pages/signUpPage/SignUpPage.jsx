import "./SignUpPage.css";
// import FormField from "../../molecules/FormField/FormField";
import FormField from "../../components/molecules/FormField/FormField";
import Buttons from "../../components/atoms/buttons/Buttons";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpPage = (props) => {
  const defaultFieldsValue = {
    name: "",
    email: "",
    password: "",
    setPassword: "",
  };

  const formValidation = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name")
      .min(3, "Name length must be 3 characters")
      .matches(/^[A-Za-z\s]*$/, "Please enter valid characters"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Please enter a valid email "),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password must be at least 8 characters")
      .max(17, "Password cannot be more than 17 characters"),
    setPassword: Yup.string()
      .required("Please enter your confirm password")
      .oneOf([Yup.ref("password"), null], "Password not match"),
  });

  return (
    <section className="form-bg-img section-padding">
      <div className="signUp-wrapper">
        <h1>{props.formCaption}</h1>
        <Formik
          initialValues={defaultFieldsValue}
          validationSchema={formValidation}
        >
          <Form>
            <FormField
              label="Your Name"
              placeholder="Enter Your Name"
              type="text"
              name="name"
            ></FormField>
            <span className="text-danger">
              <ErrorMessage name="name" />
            </span>
            <FormField
              label="Email Address"
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
            ></FormField>
            <span className="text-danger">
              <ErrorMessage name="email" />
            </span>
            <FormField
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              name="password"
            ></FormField>
            <span className="text-danger">
              <ErrorMessage name="password" />
            </span>
            <FormField
              label="Confirm Password"
              placeholder="Enter Your Confirm Password"
              type="password"
              name="setPassword"
            ></FormField>
            <span className="text-danger">
              <ErrorMessage name="setPassword" />
            </span>
            <Buttons
              label="Sign Up"
              type="submit"
              className="sign-up"
            ></Buttons>
            <p className="text-white mt-3">
              {props.haveAccount} <a href="#">{props.loginHere}</a>
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignUpPage;
