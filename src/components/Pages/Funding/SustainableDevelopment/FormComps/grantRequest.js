import React from "react";

import ItemForm from "./itemForm";

const GrantRequest = ({ setForm, formData, navigation }) => {
    const { grantAmount,
        publicDescriptionOfProject
      } = formData;

const { next, previous } = navigation;

return (
  <div className="form">
    <h2>Apply - Grant Request</h2> <h3>Please ensure all fields are filled in</h3>

    <form  onSubmit={()=>{next()}}>
    <ItemForm
      label="Amount of Grant Requested (£)"
      name="grantAmount"
      value={grantAmount}
      onChange={setForm}
      type="number"
      required
    />
    <ItemForm
      label="Public Description Of Project"
      name="publicDescriptionOfProject"
      value={publicDescriptionOfProject}
      onChange={setForm}
    />
      <div className="fundingNavDiv"> 
        <div onClick={previous} id="back">
          <input  id="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div id="next">
            <input id="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
      </div>
           
    </form>
  </div>
);
};

export default GrantRequest;
