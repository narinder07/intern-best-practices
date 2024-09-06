import "./SignUpForm.css";
import TextInputLabelField from "../../../molecules/textInputLabelField/TextInputLabelField";
import Button from "../../atoms/button/Button";

const SignUpForm = (props) => {
  const { formInputValues, onSubmitHandle } = props;
  console.log("formInputValues--------------", formInputValues);

  return (
    <div className="signUp-wrapper">
      <h1>{props.formCaption}</h1>

      <form onSubmit={onSubmitHandle}>
        <TextInputLabelField
          label="Display Name"
          placeholder="Enter your display name"
          name="displayName"
          value={
            formInputValues !== undefined && formInputValues.displayName
              ? formInputValues.displayName
              : ""
          }
        />

        <TextInputLabelField
          label="Username"
          placeholder="Enter your username"
          name="username"
          value={
            formInputValues !== undefined && formInputValues.username
              ? formInputValues.username
              : ""
          }
        />
        <TextInputLabelField
          label="Email Address"
          placeholder="Enter your email address"
          name="email"
          value={
            formInputValues !== undefined && formInputValues.email
              ? formInputValues.email
              : ""
          }
        />

        <TextInputLabelField
          label="password"
          placeholder="Enter your password"
          name="password"
          value={
            formInputValues !== undefined && formInputValues.password
              ? formInputValues.password
              : ""
          }
        />

        <TextInputLabelField
          label="confirmPassword"
          placeholder="Enter your confirm password"
          name="confirmPassword"
          value={
            formInputValues !== undefined && formInputValues.confirmPassword
              ? formInputValues.confirmPassword
              : ""
          }
        />

        <Button label="Submit" className="primary" type="submit"></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
