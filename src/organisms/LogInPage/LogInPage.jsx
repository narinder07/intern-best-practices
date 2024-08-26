import "./LogInPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const LogInPage = (props) => {
  return (
    <div className="login-wrapper">
      <h1 className="text-center text-white mb-4">{props.formCaption}</h1>
      <form>
        <FormField
          label="Email Address"
          placeholder="Enter Your Email Address"
          type="email"
        ></FormField>
        <FormField
          label="Password"
          placeholder="Enter Your Password"
          type="password"
        ></FormField>
        <Buttons
          label="Login"
          type="button"
          className="schedule-trip"
        ></Buttons>
      </form>
    </div>
  );
};

export default LogInPage;
