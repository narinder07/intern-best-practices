import "./Label.css";

const Label = (props) => {
  return <label  htmlFor={props.name}>{props.label}</label>;
};

export default Label;
