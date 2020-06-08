import React from "react";
import { useMediaQuery } from 'react-responsive';
import ItemForm from "./itemForm";

const ProjectInPractise = ({ setForm, formData, navigation }) => {
  let isMobile = useMediaQuery({ maxWidth: 767 });
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

      <form  onSubmit={()=>{next()}}>

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

export default ProjectInPractise;
