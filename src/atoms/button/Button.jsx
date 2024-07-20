// src/atoms/button/Button.jsx

import React from 'react';

const Button = (props) => {
  console.log("props: ", props)
  return (
    <button {...props}>
      {props.label}
    </button>
  );
};

export default Button;