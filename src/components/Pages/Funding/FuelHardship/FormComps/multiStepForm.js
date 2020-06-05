import React from "react";
import { useForm, useStep } from "react-hooks-helper";


import Details from "../../SustainableDevelopment/FormComps/details";
import ImpactedIndividualDetails from "./impactedIndividual";
import EnergyAccounts from "./energyAccounts";
import Review from "./review";
import Submit from "../../SustainableDevelopment/FormComps/submit";
// import ProjectInPractise from "./projectInPractise";
// import GrantRequest from "./grantRequest";

import { useMediaQuery } from 'react-responsive';
import GrantRequest from "./grantRequest";

const steps = [
  { id: "details" },
  { id: "impactedIndividualDetails" },
  { id: "energyAccounts" },
  { id: "grantRequest" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  numberOfChildren: "No Children",
  currentEmploymentSituation: "Full Time Employment",
  householdIncomPerYear: "Under £10,000",
  creditOrPrepayment: "Credit Meter",
  hasCustomerHadPaymentPlanPreviously: false,
  nameOfImpactedIndividual: "",
  nameOfGasSupplier: "",
  fullAddress: "",
  organisationName: "",
  companyRegistrationOrCharityNumber: "",
  position: "",
  confirmGrantOnlyForEnergy: false,
  contactNumber: "",
  contactName: "",
  impactedIndividualContactNumber:"",
  currentBalanceOnAccount: "",
  nameOfElectricSupplier: "",
  monthlyDirectDebitAmount:"",
  grantAmount: "",
  emailAddress: "",
  electricAccountNumber: "",
  impactedIndividualContactEmail: "",
  appliedBefore: false,
  contactEmail: "",
  gasAccountNumber: "",
  timeSinceLastApplication:"N/A",
  evidenceProvided: {
    driversLicense:false,
    utilityBill:false,
    payslips:false,
    contract:false,
    emailHR:false,
    bankStatements:false,
    energySupplierStatement:false,
    energySupplierEmail:false
  }
};

const MultiStepForm = ({  }) => {
  let isMobile = useMediaQuery({ maxWidth: 970 })

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  return(
    <div  className="fundCard" id="form" >
      
     
      {(() => {

        switch (id) {
          case "details":
            return <Details {...props} />;
          case "impactedIndividualDetails":
            return <ImpactedIndividualDetails {...props} />;
          case "energyAccounts":
            return <EnergyAccounts {...props} />;
          case "grantRequest":
            return <GrantRequest {...props} />;
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
