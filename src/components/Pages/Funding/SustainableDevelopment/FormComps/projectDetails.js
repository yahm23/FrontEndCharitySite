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

const { next } = navigation;

return (
  <div className="form">
    
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
    />
    <ItemForm
      label="Why Is The Project Needed? (Max 300 Words) *"
      name="projectNeeded"
      value={projectNeeded}
      onChange={setForm}
    />
    <ItemForm
      label="Who Will Be Impacted By The Project? (Max 300 Words) *"
      name="whoWillProjectImpact"
      value={whoWillProjectImpact}
      onChange={setForm}
    />
    <ItemForm
      label="What Is The Outcome Or Benefit Of The Project? (Max 300 Words) *"
      name="outcomeOrBenefitOfProject"
      value={outcomeOrBenefitOfProject}
      onChange={setForm}
    />
    <ItemForm
      label="What Is Community Impact? (Max 300 Words) *"
      name="communityImpactOfProject"
      value={communityImpactOfProject}
      onChange={setForm}
    />
    <ItemForm
      label="How Does This Project Demonstrate Sustainability Or Conservation? (Max 300 Words) *"
      name="projectDemonstration"
      value={projectDemonstration}
      onChange={setForm}
    />
    <div>
      <button onClick={next}>Next</button>
    </div>
  </div>
);
};

export default ProjectDetails;
