import React from "react";

import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";
import DropdownForm from "./dropdownForm";

const ImpactedIndividualDetails = ({ setForm, formData, navigation }) => {
  const { nameOfImpactedIndividual,
          appliedBefore,
          timeSinceLastApplication,
          fullAddress,
          impactedIndividualContactEmail, 
          impactedIndividualContactNumber,
          currentEmploymentSituation,
          householdIncomPerYear,
          numberOfChildren
        } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="Name of Impacted Individual"
        name="nameOfImpactedIndividual"
        value={nameOfImpactedIndividual}
        onChange={setForm}
      />
      <ItemForm
        label="Has The Individual Applied Before?"
        name="appliedBefore"
        value={appliedBefore}
        onChange={setForm}
      />
      <ItemForm
        label="Time Since Last Application (if applicable)"
        name="timeSinceLastApplication"
        value={timeSinceLastApplication}
        onChange={setForm}
      />
      <ItemForm
        label="Full Address"
        name="fullAddress"
        value={fullAddress}
        onChange={setForm}
      />
      <ItemForm
        label="Contact Number"
        name="impactedIndividualContactNumber"
        value={impactedIndividualContactNumber}
        onChange={setForm}
      />
    <ItemForm
        label="Contact Email"
        name="impactedIndividualContactEmail"
        value={impactedIndividualContactEmail}
        onChange={setForm}
        type="email"
    />
    <div>
        <label>Number of Children</label>
        <select
        name="numberOfChildren"
        value={numberOfChildren}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="0">No Children</option>
            <option value="1-2">1-2 Children</option>
            <option value="3-4">3-4 Children</option>
            <option value="5+">5+ Children</option>
        </select>
    </div>
      
    <div>
        <label>Current Employment Status</label>
        <select
        name="currentEmploymentSituation"
        value={currentEmploymentSituation}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="Full Time Empoyment">Full Time Empoyment</option>
            <option value="Part Time Empoyment">Part Time Empoyment</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
        </select>
    </div>
      
    <div>
        <label>Household Income Per Year</label>
        <select
        name="householdIncomPerYear"
        value={householdIncomPerYear}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="Under £10,000">Under £10,000</option>
            <option value="£10,000-£16,000">£10,000-£16,000 </option>
            <option value="£16,000-£18,000">£16,000-£18,000</option>
            <option value="18,000-£20,000">£18,000-£20,000</option>
            <option value="Over £20,000">Over £20,000</option>
        </select>
    </div>

      
      {/* <ItemForm
        label="Current Employment Status"
        name="companyRegistrationOrCharityNumber"
        value={companyRegistrationOrCharityNumber}
        onChange={setForm}
      />
      <ItemForm
        label="Household Income Per Year"
        name="companyRegistrationOrCharityNumber"
        value={companyRegistrationOrCharityNumber}
        onChange={setForm}
      /> */}
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default ImpactedIndividualDetails;
