import "./ListItem.css";
import { NavLink } from "react-router-dom";

const ListItem = (props) => {
  return (
    <li>
      <NavLink
        // style={({ isActive }) =>
        //   isActive ? { color: "#3cbeee" } : { color: "#021016" }
        // }
        to={props.href}
        onClick={props.toggleMenuLinks}
        className={props.isActive === true ? "menu-active" : "menu"}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default ListItem;
