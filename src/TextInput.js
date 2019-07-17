import React from "react";
import propTypes from "prop-types";

const TextInput = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
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
