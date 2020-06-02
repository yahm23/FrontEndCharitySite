import React from "react";

import ItemForm from "./itemForm";

const GrantRequest = ({ setForm, formData, navigation }) => {
    const { grantAmount,
        publicDescriptionOfProject
      } = formData;

const { next } = navigation;

return (
  <div className="form">
   
    <ItemForm
      label="Amount of Grant Requested (£) *"
      name="grantAmount"
      value={grantAmount}
      onChange={setForm}
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
