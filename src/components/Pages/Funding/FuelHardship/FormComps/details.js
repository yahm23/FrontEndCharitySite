import React from "react";
import { useMediaQuery } from 'react-responsive';
import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";

const Details = ({ setForm, formData, navigation }) => {
  let isMobile = useMediaQuery({ maxWidth: 767 });
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
      <div id="next">
        
        {isMobile? <svg height="32" fill="#B2B3B6"id="chevron-email" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>:<button onClick={next}>Next</button>}

      </div>
      
      {/* Code below is to test pages wihtout having to fill out entire form */}

      {/* <div onClick={go('impactedIndividual')} id="back">
        <input  id="fundingNavButtons" value="Back" ></input>
      </div> */}
        
    </div>
  );
};

export default Details;
