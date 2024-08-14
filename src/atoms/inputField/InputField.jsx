import "./InputField.css";

const InputField = (props) => {
  return <input type={props.text} placeholder={props.placeholder} />;
};

export default InputField;
