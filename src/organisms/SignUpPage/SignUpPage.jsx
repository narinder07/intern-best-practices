import "./SignUpPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const SignUpPage = (props) => {
  const defaultFormValues = {
    name: "",
    email: "",
    password: "",
    setPassword: "",
  };

  const formValidation = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name")
      .min(2, "Name must be at least 2 characters long"),
  });

  const formHandle = (values) => {
    console.log("form values", values);
  };

  return (
    <section className="form-bg-img section-padding">
      <div className="signUp-wrapper">
        <h1>{props.formCaption}</h1>
        <Formik
          initialValues={defaultFormValues}
          validationSchema={formValidation}
          onSubmit={formHandle}
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
            <FormField
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              name="password"
            ></FormField>
            <FormField
              label="Confirm Password"
              placeholder="Enter Your Confirm Password"
              type="password"
              name="setPassword"
            ></FormField>
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
