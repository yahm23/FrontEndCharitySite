import React from "react";
import { useMediaQuery } from 'react-responsive';

import ItemForm from "./itemForm";

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

  const { next, previous,go } = navigation;

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
          type="tel"
          />
        <ItemForm
          label="Contact Email"
          name="contactEmail"
          value={contactEmail}
          onChange={setForm}
          type="email"
          required
         />
      
        <div>
          <input id={isMobile? "next-mobile":"next"} className="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
        {/* Code below is to test pages wihtout having to fill out entire form */}
        {/* <div onClick={go('review')} id="back">
          <input  id="fundingNavButtons" value="Back" ></input>
        </div>
         */}
      </form>
    </div>
  );
};
{/* <button type="submit" className="nextText" >Next</button> */}

export default Details;
