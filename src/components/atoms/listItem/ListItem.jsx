import { NavLink } from "react-router-dom";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li>
      <NavLink
        to={props.href}
        style={({ isActive }) => {
          return {
            color: isActive ? "#00bcd4" : "#021016",
          };
        }}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default ListItem;
