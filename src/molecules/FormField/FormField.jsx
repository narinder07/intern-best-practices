import "./FormField.css";
import InputLabel from "../../atoms/inputLabel/InputLabel";
import InputField from "../../atoms/inputField/InputField";

const FormField = (props) => {
  return (
    <div className="form-field">
      <InputLabel {...props}></InputLabel>
      <InputField type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default FormField;
