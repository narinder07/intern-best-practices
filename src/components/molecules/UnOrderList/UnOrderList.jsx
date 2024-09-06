import "./UnOrderList.css";
import ListItem from "../../atoms/listItem/ListItem";

const UnOrderList = (props) => {
  return (
    <ul className={props.classes}>
      {props.menuItems &&
        props.menuItems.map((navLinks, linksIndex) => (
          <ListItem
            key={linksIndex}
            href={navLinks.href}
            name={navLinks.name}
          ></ListItem>
        ))}
    </ul>
  );
};

export default UnOrderList;
