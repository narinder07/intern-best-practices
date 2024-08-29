import "./SignUpPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const SignUpPage = (props) => {
  return (
    <section className="form-bg-img section-padding">
      <div className="signUp-wrapper">
        <h1>{props.formCaption}</h1>
        <form>
          <FormField
            label="Your Name"
            placeholder="Enter Your Name"
            type="text"
            name="yourName"
          ></FormField>
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
          <Buttons label="Sign Up" type="button" className="sign-up"></Buttons>
          <p className="text-white mt-3">
            {props.haveAccount} <a href="#">{props.loginHere}</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
