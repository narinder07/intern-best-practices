import "./SignUp.css";
import InputField from "../../../components/atoms/inputField/InputField";
import Buttons from "../../../components/atoms/buttons/Buttons";

const SignUp = (props) => {
  const getValues = () => {
    alert("hello");
  };

  return (
    <div className="input-field">
      <div className="input-field-mail">
        <InputField
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
        />
      </div>
      <div className="button-mail">
        <Buttons label={props.buttonText} />
      </div>
    </div>
  );
};

export default SignUp;
