import "./InputField.css";
import { Field } from "formik";

const InputField = (props) => {
  return (
    <Field
      name={props.name}
      type={props.text}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
