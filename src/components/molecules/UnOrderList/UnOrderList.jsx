import "./UnOrderList.css";
import ListItem from "../../atoms/listItem/ListItem";

const UnOrderList = (props) => {
  const { menuItems, classes } = props;

  if (!menuItems || !Array.isArray(menuItems)) {
    console.error("menuItems prop is either undefined or not an array");
    return null;
  }

  console.log("menuItems :", menuItems);
  return (
    <ul className={classes}>
      {menuItems.map((navLinks, linksIndex) => (
        <ListItem
          key={linksIndex}
          href={navLinks.href}
          name={navLinks.name}
          isActive={navLinks.isActive ? navLinks.isActive : false}
        />
      ))}
    </ul>
  );
};

export default UnOrderList;