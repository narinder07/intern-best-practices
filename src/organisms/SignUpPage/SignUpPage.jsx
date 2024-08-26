import "./SignUpPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const SignUpPage = (props) => {
  return (
    <div className="signUp-wrapper">
      <h2 className="text-white mb-3 text-center">{props.formCaption}</h2>
      <form>
        <FormField
          label="First Name"
          placeholder="Enter Your First Name"
          type="text"
        ></FormField>
        <FormField
          label="Last Name"
          placeholder="Enter Your Last Name"
          type="text"
        ></FormField>
        <FormField
          label="Email Address"
          placeholder="Enter Your Email Address"
          type="email"
        ></FormField>
        <FormField
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          type="number"
        ></FormField>
        <FormField
          label="Password"
          placeholder="Enter Your Password"
          type="password"
        ></FormField>
        <FormField
          label="Confirm Password"
          placeholder="Enter Your Confirm Password"
          type="password"
        ></FormField>
        <Buttons
          label="Register"
          type="button"
          className="schedule-trip"
        ></Buttons>
      </form>
    </div>
  );
};

export default SignUpPage;
