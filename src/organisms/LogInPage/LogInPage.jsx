import "./LogInPage.css";
import FormField from "../../molecules/FormField/FormField";
import Buttons from "../../atoms/buttons/Buttons";

const LogInPage = (props) => {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h1>{props.formCaption}</h1>
          </div>
          <div className="col-lg-12 g-3">
            <FormField
              label="Email Address"
              placeholder="Enter Your Name"
              type="text"
            ></FormField>
          </div>
          <div className="col-lg-12 g-3">
            <FormField
              label="Password"
              placeholder="Enter Your Password"
              type="password"
            ></FormField>
          </div>
          <Buttons
            label="Login"
            type="button"
            className="schedule-trip"
          ></Buttons>
        </div>
      </div>
    </form>
  );
};

export default LogInPage;
