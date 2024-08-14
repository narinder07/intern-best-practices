import "./Button.css";

const Buttons = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.label}
    </button>
  );
};
export default Buttons;
