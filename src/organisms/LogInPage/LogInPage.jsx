import "./LogInPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const LogInPage = (props) => {
  return (
    <div className="login-bg-img">
      <div className="login-wrapper">
        <h1>{props.formCaption}</h1>
        <form>
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
          <Buttons label="Login" type="button" className="login-btn"></Buttons>
          <p className="mt-3 text-white">
            {props.noAccount} <a href="#">{props.signUpHere}</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
