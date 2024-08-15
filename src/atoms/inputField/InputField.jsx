import "./InputField.css";

const InputField = (props) => {
  return (
    <input
      // className="input-custom"
      type={props.text}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
