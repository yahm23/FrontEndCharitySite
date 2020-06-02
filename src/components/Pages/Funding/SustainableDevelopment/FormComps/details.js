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

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="Email Address"
        name="emailAddress"
        value={emailAddress}
        onChange={setForm}
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
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Details;
