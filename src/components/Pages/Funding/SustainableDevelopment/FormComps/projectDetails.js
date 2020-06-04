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
        <button onClick={previous}>Back</button>
    </div>
    <div>
      <button onClick={next}>Next</button>
    </div>
  </div>
);
};

export default ProjectDetails;
