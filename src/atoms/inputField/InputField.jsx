import "./InputField.css";

const InputField = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
