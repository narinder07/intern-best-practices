import "./LogInForm.css";
import TextInputLabelField from "../../molecules/textInputLabelField/TextInputLabelField";
import Button from "../../atoms/button/Button";

const LogInForm = ({ defaultValues, onSubmitLogIn, onChangeEvent, errors }) => {
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
    <div className="login-bg-img">
      <div className="login-wrapper">
        <form onSubmit={onSubmitLogIn}>
          <TextInputLabelField
            label="Email Address"
            placeholder="Enter Your Email Address"
            type="email"
            name="email"
            value={
              defaultValues !== undefined && defaultValues.email
                ? defaultValues.email
                : ""
            }
            onChangeEvent={handleChange}
            error={getErrorMessage("email")}
          ></TextInputLabelField>
          <TextInputLabelField
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            onChangeEvent={handleChange}
            error={getErrorMessage("password")}
            value={
              defaultValues !== undefined && defaultValues.password
                ? defaultValues.password
                : ""
            }
          ></TextInputLabelField>

          {getErrorMessage("exception") && (
            <span className="exception-error text-danger">
              {getErrorMessage("exception")}
            </span>
          )}

          <Button label="Login" type="submit" className="login-btn"></Button>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
