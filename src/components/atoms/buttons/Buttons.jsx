import "./Button.css";

const Buttons = ({ label, type, className, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {label} 
    </button>
  );
};
export default Buttons;
