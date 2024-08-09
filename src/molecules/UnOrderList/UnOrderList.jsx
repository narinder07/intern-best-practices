import "./UnOrderList.css";
import ListItem from "../../atoms/listItem/ListItem";

const UnOrderList = (props) => {
  return (
    <ul className={props.classes}>
      {props.menuItems &&
        props.menuItems.map((item) => (
          <ListItem href={item.link} key={item.key} name={item.name}></ListItem>
        ))}
    </ul>
  );
};

export default UnOrderList;
