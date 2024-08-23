import "./InputField.css";

const InputField = (props) => {
  return (
    <input
      className="form-control"
      type={props.text}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
