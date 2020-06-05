import React from "react";

import ItemForm from "./itemForm";

const ProjectDetails = ({ setForm, formData, navigation }) => {
    const { projectName,
        projectOverview,
        projectNeeded,
        whoWillProjectImpact,
        outcomeOrBenefitOfProject,
        communityImpactOfProject,
        projectDemonstration 
      } = formData;

const { next, previous } = navigation;

return (
  <div className="form">
    <h2>Apply - Project Details</h2> <h3>Please ensure all fields are filled in</h3>
    <ItemForm
      label="Name of Project"
      name="projectName"
      value={projectName}
      onChange={setForm}
    />
    <ItemForm
      label="Full Overview of Project (Max 1,000 Words) *"
      name="projectOverview"
      value={projectOverview}
      onChange={setForm}
      type="textarea"
    />
    <ItemForm
      label="Why Is The Project Needed? (Max 300 Words) *"
      name="projectNeeded"
      value={projectNeeded}
      onChange={setForm}
      type="textarea"

    />
    <ItemForm
      label="Who Will Be Impacted By The Project? (Max 300 Words) *"
      name="whoWillProjectImpact"
      value={whoWillProjectImpact}
      onChange={setForm}
      type="textarea"
    />
    <ItemForm
      label="What Is The Outcome Or Benefit Of The Project? (Max 300 Words) *"
      name="outcomeOrBenefitOfProject"
      value={outcomeOrBenefitOfProject}
      onChange={setForm}
      type="textarea"

    />
    <ItemForm
      label="What Is Community Impact? (Max 300 Words) *"
      name="communityImpactOfProject"
      value={communityImpactOfProject}
      onChange={setForm}
      type="textarea"

    />
    <ItemForm
      label="How Does This Project Demonstrate Sustainability Or Conservation? (Max 300 Words) *"
      name="projectDemonstration"
      value={projectDemonstration}
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

export default ProjectDetails;
