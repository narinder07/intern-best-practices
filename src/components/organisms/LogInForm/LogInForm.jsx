import "./LogInForm.css";
import TextInputLabelField from "../../molecules/textInputLabelField/TextInputLabelField";
import Button from "../../atoms/button/Button";

const LogInForm = (props) => {
  return (
    <div className="login-bg-img">
      <div className="login-wrapper">
        <h1>{props.formCaption}</h1>
        <form onSubmit={props.handleLogIn}>
          <TextInputLabelField
            label="Email Address"
            placeholder="Enter Your Email Address"
            type="email"
            name="email"
          ></TextInputLabelField>
          <TextInputLabelField
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            name="password"
          ></TextInputLabelField>
          <Button label="Login" type="button" className="login-btn"></Button>
          <p className="mt-3 text-white">
            {props.noAccount} <a href="#">{props.signUpHere}</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
