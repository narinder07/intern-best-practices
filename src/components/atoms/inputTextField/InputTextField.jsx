import "./InputTextField.css";
import Icon from "../../atoms/icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { togglePassword } from "../../../redux/ToggleSlice";

const InputTextField = (props) => {
  const { onChangeEvent, error, type, formName, name } = props;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (onChangeEvent) {
      onChangeEvent(event);
    }
  };

  // toggle password
  const showPassword = useSelector(
    (state) => state.toggleReducer[formName]?.[name]
  );
  const passwordToggle = () => {
    dispatch(togglePassword({ formName, passwordFields: name }));
  };

  return (
    <>
      <input
        name={props.name}
        type={showPassword && type === "password" ? "text" : type}
        placeholder={props.placeholder}
        className={`${error ? "inputError" : ""}`}
        id={props.name + props.name.split("").reverse().join("")}
        value={props.value}
        onChange={handleChange}
      />

      {type === "password" && (
        <div className="icon-style">
          <Icon
            iconName={showPassword ? "close" : "eye"}
            onClick={passwordToggle}
          />
        </div>
      )}

      {props.error ? (
        <span className="text-danger ">{props.error ? props.error : ""}</span>
      ) : (
        ""
      )}
    </>
  );
};

export default InputTextField;
