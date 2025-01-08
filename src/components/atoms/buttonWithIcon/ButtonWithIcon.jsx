import "./ButtonWithIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonWithIcon = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.label}
      <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
    </button>
  );
};
export default ButtonWithIcon;
