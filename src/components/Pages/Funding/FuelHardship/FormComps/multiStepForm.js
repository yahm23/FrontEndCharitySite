import React from "react";
import { useForm, useStep } from "react-hooks-helper";


import Details from "../../SustainableDevelopment/FormComps/details";
import ImpactedIndividualDetails from "./impactedIndividual";
import Review from "./review";
import Submit from "../../SustainableDevelopment/FormComps/submit";
// import ProjectInPractise from "./projectInPractise";
// import GrantRequest from "./grantRequest";

import { useMediaQuery } from 'react-responsive';

const steps = [
  { id: "details" },
  { id: "impactedIndividualDetails" },
  // { id: "projectInPractise" },
  // { id: "grantRequest" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  numberOfChildren: "",
  currentEmploymentSituation: "",
  householdIncomPerYear: "",
  creditOrPrepayment: "",
  hasCustomerHadPaymentPlanPreviously: false,
  nameOfImpactedIndividual: "",
  nameOfGasSupplier: "",
  fullAddress: "",
  organisationName: "",
  companyRegistrationOrCharityNumber: "",
  position: "",
  confirmGrantOnlyForEnergy: false,
  contactNumber: 0,
  contactName: "",
  impactedIndividualContactNumber: 1,
  currentBalanceOnAccount: 3,
  nameOfElectricSupplier: "",
  monthlyDirectDebitAmount: 2,
  grantAmount: 12,
  emailAddress: "",
  electricAccountNumber: "",
  evidenceProvided: "",
  impactedIndividualContactEmail: "",
  appliedBefore: false,
  contactEmail: "",
  gasAccountNumber: "",

};

const MultiStepForm = ({  }) => {
  let isMobile = useMediaQuery({ maxWidth: 970 })

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  return(
    <div  className={isMobile? "card-mobile":"card"} id="form" >
      
      <h2>Apply</h2>
      <h3>Please ensure all fields are filled in</h3>
      {(() => {

        switch (id) {
          case "details":
            return <Details {...props} />;
          case "impactedIndividualDetails":
            return <ImpactedIndividualDetails {...props} />;
          // case "projectInPractise":
          //   return <ProjectInPractise {...props} />;
          // case "grantRequest":
          //   return <GrantRequest {...props} />;
          case "review":
            return <Review {...props} />;
          case "submit":
            return <Submit {...props} />;
          default:
            return null;
        }
      })()}
    </div>)
};

export default MultiStepForm;
