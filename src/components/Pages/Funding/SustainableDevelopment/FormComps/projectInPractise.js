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

  const { next, previous } = navigation;

  return (
    <div className="">
      <h2>Apply - Project In Practise</h2> <h3>Please ensure all fields are filled in</h3>

      <ItemForm
        label="How Will You Source Other Funding Required? (Max 300 Words)"
        name="sourceOtherFunding"
        value={sourceOtherFunding}
        onChange={setForm}
        type="textarea"

      />
      <ItemForm
        label="What Are The Barriers And Challenges To The Project? (Max 300 Words)"
        name="barriersAndChallenges"
        value={barriersAndChallenges}
        onChange={setForm}
        type="textarea"

      />
      <ItemForm
        label="How Will The Project Be Monitored And Evaluated? (Max 300 Words)"
        name="projectMonitoredAndEvaluated"
        value={projectMonitoredAndEvaluated}
        onChange={setForm}
        type="textarea"

      />
      <ItemForm
        label="How Will The Project Continue Once The Funding Has Been Used? (Max 300 Words)"
        name="projectContinuedOnceFunding"
        value={projectContinuedOnceFunding}
        onChange={setForm}
        type="textarea"

      />
      <ItemForm
        label="Are You Working With Any Partner Organisations? (Max 300 Words)"
        name="partnerOrganisations"
        value={partnerOrganisations}
        onChange={setForm}
        type="textarea"

      />
      <ItemForm
        label="Please Outline Any Existing Funding Or Reserves (Max 300 Words)"
        name="existingFundsOrReserves"
        value={existingFundsOrReserves}
        onChange={setForm}
        type="textarea"
      />
      <div>
        <a href="javascript:void(0);">

        <div onClick={previous} className="readStory" id="back">
            <svg  transform="scale(-1, -1)" height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
            <h4 className="nextText" >Back</h4>
          </div>
        </a>
        <a href="javascript:void(0);">
        <div onClick={next} className="readStory" id="next">
            <h4 className="nextText" >Next</h4>
            <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
        </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectInPractise;
