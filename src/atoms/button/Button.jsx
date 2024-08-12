import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.label}
      <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
    </button>
  );
};
export default Button;
