import React from "react";
import propTypes from "prop-types";

const TextInput = props => {
  //line 8 is like an if statement saying that if the left is true, then do the right
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <br />
      <input
        type="text"
        onChange={props.onChange}
        id={props.id}
        value={props.value}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired
};

export default TextInput;
