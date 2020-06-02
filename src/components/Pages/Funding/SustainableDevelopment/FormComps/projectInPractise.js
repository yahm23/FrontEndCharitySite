import React from "react";

import ItemForm from "./itemForm";

const ProjectInPractise = ({ setForm, formData, navigation }) => {
  const { sourceOtherFunding,
          barriersAndChallenges,
          projectMonitoredAndEvaluated,
          projectContinuedOnceFunding,
          partnerOrganisations,
          existingFundsOrReserves
        } = formData;

  const { next } = navigation;

  return (
    <div className="">
      
      <ItemForm
        label="How Will You Source Other Funding Required? (Max 300 Words) *"
        name="sourceOtherFunding"
        value={sourceOtherFunding}
        onChange={setForm}
      />
      <ItemForm
        label="What Are The Barriers And Challenges To The Project? (Max 300 Words) *"
        name="barriersAndChallenges"
        value={barriersAndChallenges}
        onChange={setForm}
      />
      <ItemForm
        label="How Will The Project Be Monitored And Evaluated? (Max 300 Words) *"
        name="projectMonitoredAndEvaluated"
        value={projectMonitoredAndEvaluated}
        onChange={setForm}
      />
      <ItemForm
        label="How Will The Project Continue Once The Funding Has Been Used? (Max 300 Words) *"
        name="projectContinuedOnceFunding"
        value={projectContinuedOnceFunding}
        onChange={setForm}
      />
      <ItemForm
        label="Are You Working With Any Partner Organisations? (Max 300 Words) *"
        name="partnerOrganisations"
        value={partnerOrganisations}
        onChange={setForm}
      />
      <ItemForm
        label="Please Outline Any Existing Funding Or Reserves (Max 300 Words) *"
        name="existingFundsOrReserves"
        value={existingFundsOrReserves}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default ProjectInPractise;
