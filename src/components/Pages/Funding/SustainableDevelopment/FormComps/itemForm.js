import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
        
      </>
    )}
  </div>
);

export default ItemForm;
