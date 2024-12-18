import "./InputTextField.css";

const InputTextField = (props) => {
  const { onChangeEvent, error } = props;

  const handleChange = (event) => {
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };

  return (
    <>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`${error ? "inputError" : ""}`}
        id={props.name + props.name.split("").reverse().join("")}
        value={props.value}
        onChange={handleChange}
      />
      {props.error ? (
        <span className="text-danger ">{props.error ? props.error : ""}</span>
      ) : (
        ""
      )}
    </>
  );
};

export default InputTextField;
