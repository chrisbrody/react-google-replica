import React from "react";

function CustomInput(props) {
  return (
    <input type={props.type} placeholder={props.ph} autofocus={props.af} />
  );
}

export default CustomInput;
