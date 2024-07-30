import "./UnOrderList.css";

const UnOrderList = (props) => {
  return <ul className={props.classes}>{props.children}</ul>;
};

export default UnOrderList;
