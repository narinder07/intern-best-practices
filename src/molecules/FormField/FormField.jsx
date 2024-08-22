import "./FormField.css";
import InputLabel from "../../atoms/inputLabel/InputLabel";
import InputField from "../../atoms/inputField/InputField";

const FormField = (props) => {
  return (
    <div>
      <InputLabel {...props}></InputLabel>
      <InputField {...props} />
    </div>
  );
};

export default FormField;
