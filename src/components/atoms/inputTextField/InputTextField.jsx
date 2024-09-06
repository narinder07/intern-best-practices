import "./InputTextField.css";

const InputTextField = (props) => {
  return (
    <input
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      id={props.name + props.name.split("").reverse().join("")}
      value={props.value}
    />
  );
};

export default InputTextField;
