import "./InputLabel.css";

const InputLabel = (props) => {
  return (
    <label htmlFor="">
      {props.label} {props.children}
    </label>
  );
};

export default InputLabel;
