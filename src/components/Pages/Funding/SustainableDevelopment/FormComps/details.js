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
        
      
      <form onSubmit={()=>{next()}}>

        <ItemForm
          label="Email Address"
          name="emailAddress"
          value={emailAddress}
          onChange={setForm}
          type="email"
          required
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
          type="number"
          />
        <ItemForm
          label="Contact Email"
          name="contactEmail"
          value={contactEmail}
          onChange={setForm}
          type="email"
          required
         />
      
      
        <div  className="readStory" id="next">
          <input  className="readStory" id="funding" type="submit" value="Next" ></input>
        </div>
      
      </form>
    </div>
  );
};
{/* <button type="submit" className="nextText" >Next</button> */}

export default Details;
