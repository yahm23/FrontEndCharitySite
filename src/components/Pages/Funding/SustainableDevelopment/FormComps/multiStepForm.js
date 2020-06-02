import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Details from "./details";
import ProjectDetails from "./projectDetails";
import ProjectInPractise from "./projectInPractise";
import GrantRequest from "./grantRequest";
import Submit from "./submit";
import Review from "./review";



const steps = [
  { id: "details" },
  { id: "projectDetails" },
  { id: "projectInPractise" },
  { id: "grantRequest" },
  { id: "review" },
  { id: "submit" },
];

const defaultData = {
  outcomeOrBenefitOfProject: "",
  projectName: "",
  organisationName: "",
  companyRegistrationOrCharityNumber: "",
  sourceOtherFunding: "",
  position: "",
  contactNumber: "",
  contactName: "",
  barriersAndChallenges: "",
  projectNeeded: "",
  publicDescriptionOfProject: "",
  whoWillProjectImpact: "",
  partnerOrganisations: "",
  projectOverview: " ",
  communityImpactOfProject: "",
  grantAmount: "",
  projectMonitoredAndEvaluated: "",
  projectDemonstration: "",
  emailAddress: "",
  projectContinuedOnceFunding: "",
  contactEmail: "",
  existingFundsOrReserves: ""
};

const MultiStepForm = ({  }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  return(
    <div>
      {(() => {

        switch (id) {
          case "details":
            return <Details {...props} />;
          case "projectDetails":
            return <ProjectDetails {...props} />;
          case "projectInPractise":
            return <ProjectInPractise {...props} />;
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
