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
    <div>
    <a href="javascript:void(0);">
      <div onClick={previous} className="readStory" id="back">
          <svg  transform="scale(-1, -1)" height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
          <h4 className="nextText" >Back</h4>
        </div>
    </a>
    <a href="javascript:void(0);">
      <div onClick={next} className="readStory" id="next">
          <h4 className="nextText" >Next</h4>
          <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
      </div>
    </a>
    </div>
  </div>
);
};

export default GrantRequest;
