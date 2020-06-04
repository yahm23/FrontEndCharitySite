import React from "react";

import ItemForm from "./itemForm";

const Details = ({ setForm, formData, navigation }) => {
  const { emailAddress,
          contactName,
          position,
          organisationName,
          companyRegistrationOrCharityNumber,
          contactNumber,
          contactEmail 
        } = formData;

  const { next, previous } = navigation;

  return (
    <div className="form">
       <span>
         <h2>Apply - Your Details</h2> <h3>Please ensure all fields are filled in</h3>
        </span>
      <ItemForm
        label="Email Address"
        name="emailAddress"
        value={emailAddress}
        onChange={setForm}
        type="email"
      />
      <ItemForm
        label="Contact Name"
        name="contactName"
        value={contactName}
        onChange={setForm}
      />
      <ItemForm
        label="Position"
        name="position"
        value={position}
        onChange={setForm}
      />
      <ItemForm
        label="Organisation Name"
        name="organisationName"
        value={organisationName}
        onChange={setForm}
      />
      <ItemForm
        label="Company Registration / Charity Number"
        name="companyRegistrationOrCharityNumber"
        value={companyRegistrationOrCharityNumber}
        onChange={setForm}
      />
      <ItemForm
        label="Contact Number"
        name="contactNumber"
        value={contactNumber}
        onChange={setForm}
      />
      <ItemForm
        label="Contact Email"
        name="contactEmail"
        value={contactEmail}
        onChange={setForm}
        type="email"
      />
     
      {/* <div>
        <button className="readStory" id="funding" onClick={next}>Next</button>
      </div> */}
      <a href="javascript:void(0);">
        <div onClick={next} className="readStory" id="next">
          <h4 className="nextText" >Next</h4>
          <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
        </div>
      </a>
    </div>
  );
};

export default Details;
