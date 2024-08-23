import "./SignUpPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const SignUpPage = (props) => {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-3">
            <h1>{props.formCaption}</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 g-4">
              <FormField
                label="First Name  "
                placeholder="Enter Your First Name"
                type="text"
              ></FormField>
            </div>
            <div className="col-lg-6 g-4">
              <FormField
                label="Last Name  "
                placeholder="Enter Your Last Name"
                type="text"
              ></FormField>
            </div>
            <div className="col-lg-6 g-4">
              <FormField
                label="Email Address"
                placeholder="Enter Your Email "
                type="email"
              ></FormField>
            </div>
            <div className="col-lg-6 g-4">
              <FormField
                label="Phone Number"
                placeholder="Enter Your Phone Number "
                type="number"
              ></FormField>
            </div>
            <div className="col-lg-6 g-4">
              <FormField
                label="Password"
                placeholder="Enter Your Password "
                type="password"
              ></FormField>
            </div>
            <div className="col-lg-6 g-4">
              <FormField
                label="Confirm Password"
                placeholder="Enter Your Confirm Password "
                type="password"
              ></FormField>
            </div>
          </div>
          <div className="col-lg-12 g-4">
            <Buttons
              label="Register"
              type="button"
              className="schedule-trip"
            ></Buttons>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
