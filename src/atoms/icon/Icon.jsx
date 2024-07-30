import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as BrandsIcons from "@fortawesome/free-brands-svg-icons";
import "./Icon.css";

const Icon = (props) => {
  const iconName = props.iconName;
  // Convert iconName to match the format used in FontAwesome icon library
  const iconKey = `fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`;
  console.log("iconKey:", iconKey);

  // Combine Icons and BrandsIcons using the spread operator
  const fullIcons = { ...Icons, ...BrandsIcons };

  // Access the icon dynamically from Icons object
  const icon = fullIcons[iconKey];

  console.log("icon :", icon);

  return (
    <>
      <li className={props.liClass}>
        <a href={props.href}>
          <FontAwesomeIcon className={props.class} icon={icon} />
          {props.label}
        </a>
      </li>
    </>
  );
};

export default Icon;
