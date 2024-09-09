import "./ListItem.css";

const ListItem = (props) => {
  console.log("ListItem props :", props);
  return (
    <li>
      <a href={props.href} className={props.isActive == true ? "menu-active" :"menu"}>{props.name}</a>
    </li>
  );
};

export default ListItem;
