import TextInputLabelField from "../../../components/molecules/textInputLabelField/TextInputLabelField";
import Button from "../../../components/atoms/button/Button";

const SignUpForm = ({ defaultValues, onChangeEvent, onSubmitEvent, errors}) => {
  const handleChange = (event) => {
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };
  
  console.log("errors", errors);


   // Extract error message for a specific field
   const getErrorMessage = (fieldName) => {
    if (errors && errors[fieldName]) {
      return errors[fieldName];
    }
    return "";
  };
  
  return (
    <div className="signUp-wrapper">
     

      <form onSubmit={onSubmitEvent}>
        <TextInputLabelField
          label="Display Name"
          placeholder="Enter your display name"
          name="displayName"
          value={
            defaultValues !== undefined && defaultValues.displayName
              ? defaultValues.displayName
              : ""
          }
          onChangeEvent={handleChange}
          error={getErrorMessage("displayName")}  />

        <TextInputLabelField
          label="Username"
          placeholder="Enter your username"
          name="username"
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
          label="password"
          placeholder="Enter your password"
          name="password"
          value={
            defaultValues !== undefined && defaultValues.password
              ? defaultValues.password
              : ""
          }
          onChangeEvent={handleChange}
          error={getErrorMessage("password")}
        />

        <TextInputLabelField
          label="confirmPassword"
          placeholder="Enter your confirm password"
          name="confirmPassword"
          value={
            defaultValues !== undefined && defaultValues.confirmPassword
              ? defaultValues.confirmPassword
              : ""
          }
          onChangeEvent={handleChange}
          error={getErrorMessage("confirmPassword")}
        />
       {getErrorMessage("exception") && (
          <div className="exception-error alert alert-danger">
            {getErrorMessage("exception")}
          </div>
        )}

        <Button label="Submit" className="primary" type="submit"></Button>
        
      </form>
    </div>
  );
};

export default SignUpForm;
