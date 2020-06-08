import React from "react";
import { useMediaQuery } from 'react-responsive';
import ItemForm from "./itemForm";

const GrantRequest = ({ setForm, formData, navigation }) => {
  let isMobile = useMediaQuery({ maxWidth: 767 });

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
        <div onClick={previous} >
          <input id={isMobile? "back-mobile":"back"}  className="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div >
            <input id={isMobile? "next-mobile":"next"} className="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
      </div>
           
    </form>
  </div>
);
};

export default GrantRequest;
