import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import "./Icon.css";

const Icon = (props) => {
  const iconName = props.iconName;
  // Convert iconName to match the format used in FontAwesome icon library
  const iconKey = `fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`;

  // Access the icon dynamically from Icons object
  const icon = Icons[iconKey];

  return (
    <>
      <li>
        <FontAwesomeIcon icon={icon} className="me-2" />
        <a href="">{props.label}</a>
      </li>
    </>
  );
};

export default Icon;
