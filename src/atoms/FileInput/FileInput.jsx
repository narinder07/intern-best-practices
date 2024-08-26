import "./FileInput.css";
import InputLabel from "../../atoms/inputLabel/InputLabel";

const FileInput = (props) => {
  return (
    <div className="form-field">
      <InputLabel {...props}></InputLabel>
      <input type={props.type} />
    </div>
  );
};

export default FileInput;
