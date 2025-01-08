import "./TextInputLabelField.css";
import Label from "../../atoms/label/Label";
import InputTextField from "../../atoms/inputTextField/InputTextField";

const TextInputLabelField = (props) => {
  const { onChangeEvent, formName } = props;
  const handleChange = (event) => {
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };

  return (
    <div className="form-field">
      <Label {...props}></Label>
      <InputTextField
        formName={formName}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChangeEvent={handleChange}
        error={props.error ? props.error : ""}
      />
    </div>
  );
};

export default TextInputLabelField;
