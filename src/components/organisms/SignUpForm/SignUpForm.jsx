import "./SignUpForm.css";
import TextInputLabelField from "../../molecules/textInputLabelField/TextInputLabelField";
import Button from "../../atoms/button/Button";

const SignUpForm = ({
  defaultValues,
  onChangeEvent,
  onSubmitEvent,
  errors,
}) => {
  ``;
  const handleChange = (event) => {
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };

  // Extract error message for a specific field
  const getErrorMessage = (fieldName) => {
    if (errors && errors[fieldName]) {
      console.log("errors", errors[fieldName]);
      return errors[fieldName];
    }
    return "";
  };

  return (
    <>
      <div className="form-bg-img">
        <div className="signUp-wrapper">
          <form onSubmit={onSubmitEvent}>
            <TextInputLabelField
              label="Display Name"
              placeholder="Enter your display name"
              name="displayName"
              type="text"
              value={
                defaultValues !== undefined && defaultValues.displayName
                  ? defaultValues.displayName
                  : ""
              }
              onChangeEvent={handleChange}
              error={getErrorMessage("displayName")}
            />

            <TextInputLabelField
              label="Username"
              placeholder="Enter your username"
              name="username"
              type="text"
              value={
                defaultValues !== undefined && defaultValues.username
                  ? defaultValues.username
                  : ""
              }
              onChangeEvent={handleChange}
              error={getErrorMessage("username")}
            />
            <TextInputLabelField
              label="Email Address"
              placeholder="Enter your email address"
              name="email"
              value={
                defaultValues !== undefined && defaultValues.email
                  ? defaultValues.email
                  : ""
              }
              onChangeEvent={handleChange}
              error={getErrorMessage("email")}
            />

            <TextInputLabelField
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              formName="signUp"
              value={
                defaultValues !== undefined && defaultValues.password
                  ? defaultValues.password
                  : ""
              }
              onChangeEvent={handleChange}
              error={getErrorMessage("password")}
            />

            <TextInputLabelField
              label="Confirm Password"
              placeholder="Enter your confirm password"
              formName="signUp"
              name="confirmPassword"
              type="password"
              value={
                defaultValues !== undefined && defaultValues.confirmPassword
                  ? defaultValues.confirmPassword
                  : ""
              }
              onChangeEvent={handleChange}
              error={getErrorMessage("confirmPassword")}
            />
            {getErrorMessage("exception") && (
              <span className="exception-error text-danger">
                {getErrorMessage("exception")}
              </span>
            )}

            <Button label="Submit" className="primary" type="submit"></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
