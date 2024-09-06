import "./TextInputLabelField.css";
import Label from "../../atoms/label/Label";
import InputTextField from "../../atoms/inputTextField/InputTextField";

const TextInputLabelField = (props) => {
  return (
    <div className="form-field">
      <Label {...props}></Label>
      <InputTextField
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default TextInputLabelField;
