import "./SignUp.css";
import InputField from "../../atoms/inputField/InputField";
import Buttons from "../../atoms/buttons/Buttons";

const SignUp = (props) => {
  return (
    <div className="signUp">
      <div className="input-field-mail">
        <InputField placeholder={props.placeholder} type={props.type} />
      </div>
      <div className="button-mail">
        <Buttons label={props.buttonText} />
      </div>
    </div>
  );
};

export default SignUp;
