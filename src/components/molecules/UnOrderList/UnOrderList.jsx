import "./UnOrderList.css";
import ListItem from "../../atoms/listItem/ListItem";

const UnOrderList = (props) => {
  const { menuItems, showMenuLinks, onClick } = props;

  if (!menuItems || !Array.isArray(menuItems)) {
    console.error("menuItems prop is either undefined or not an array");
    return null;
  }

  return (
    <ul className={showMenuLinks ? "nav-links active" : "nav-links"}>
      {menuItems.map((navLinks, linksIndex) => (
        <ListItem
          key={linksIndex}
          href={navLinks.to}
          name={navLinks.name}
          toggleMenuLinks={onClick}
          isActive={navLinks.isActive ? navLinks.isActive : false}
        />
      ))}
    </ul>
  );
};

export default UnOrderList;
