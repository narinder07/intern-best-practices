import "./InputTextField.css";

const InputTextField = (props) => {
  const { onChangeEvent } = props;

  const handleChange = (event) => {
    if(onChangeEvent){
      onChangeEvent(event);
    }
    
  };

  return (
    <>
      <input
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      id={props.name + props.name.split("").reverse().join("")}
      value={props.value}
      onChange={handleChange} />
      <div className="error">{props.error ? props.error : ""}</div>
    </>
  );
};

export default InputTextField;
