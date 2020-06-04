import React from "react";

import ItemForm from "./itemForm";

const GrantRequest = ({ setForm, formData, navigation }) => {
    const { grantAmount,
        publicDescriptionOfProject
      } = formData;

const { next } = navigation;

return (
  <div className="form">
    <h2>Apply - Grant Request</h2> <h3>Please ensure all fields are filled in</h3>
    <ItemForm
      label="Amount of Grant Requested (£) *"
      name="grantAmount"
      value={grantAmount}
      onChange={setForm}
      type="number"
      required
    />
    <ItemForm
      label="Public Description Of Project *"
      name="publicDescriptionOfProject"
      value={publicDescriptionOfProject}
      onChange={setForm}
    />
    
    <div>
      <button onClick={next}>Next</button>
    </div>
  </div>
);
};

export default GrantRequest;
