import React from "react";

export default (props) => {
  return (
    <div>
        <label>{props.label}</label>
        <input {...props.input} />
        <label className="red-text">{props.meta.touched && props.meta.error}</label>
    </div>
  );
};
