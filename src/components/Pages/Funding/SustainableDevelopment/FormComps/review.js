import React from "react";

const Review = ({ setForm, formData, navigation }) => {

  const { go, previous } = navigation;

  const fieldCheck=()=>{
    let x =0;
    let entries = Object.values(formData)
    console.log(entries);
    
    entries.forEach(entry=>{
      if(entry===''){
        x += 1 ;
        console.log(x);
        
      }else{
        console.log(x);
      }
    })

    if(x===0){
      return true
    }else{
      return false
    }
  }

  const submit = (formDataToSubmit)=>{
    const postURL = "https://blog-back-end-green.herokuapp.com/sustainable-development-funds";

    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSubmit)
    })
    .then(()=>{
        console.log("shoud've posted");

        
    })
  }

  const handleSubmission=()=>{
    if(fieldCheck()){
      submit(formData);
      go("submit")

    }else{
      window.alert("Please make sure you've filled in all entries in the form") 
    }
  }


  return (
    <div className="form">
      <h2>Review Your Data</h2>        
        <h4>
            Your Details
            <button onClick={() => go("details")}>Edit</button>
        </h4>
        <div>
            {" "}
            Email Address: {`${formData.emailAddress}`}<br />
            Contact Name: {`${formData.contactName}`}<br />
            Position: {`${formData.position}`}<br />
            Organisation Name: {`${formData.organisationName}`}<br />
            Company Registration / Charity Number: {`${formData.companyRegistrationOrCharityNumber}`}<br />
            Contact Number: {`${formData.contactNumber}`}<br />
            Contact Email: {`${formData.contactEmail}`}<br />
        </div>

        <h4>
        Project Details
        <button onClick={() => go("projectDetails")}>Edit</button>
      </h4>
      <div>
        Name of Project: {`${formData.projectName}`} <br />
        Full Overview of Project: {`${formData.projectOverview}`} <br />
        Why Is The Project Needed?  {`${formData.projectNeeded}`} <br />
        Who Will Be Impacted By The Project? {`${formData.whoWillProjectImpact}`}<br />
        What Is The Outcome Or Benefit Of The Project?  {`${formData.outcomeOrBenefitOfProject}`}<br />
        What Is The Community Impact?  {`${formData.communityImpactOfProject}`}<br />
        How Does This Project Demonstrate Sustainability Or Conservation?  {`${formData.projectDemonstration}`}<br />
      </div>
      <h4>
        Project in Practise
        <button onClick={() => go("projectInPractise")}>Edit</button>
      </h4>
      <div>
        How Will You Source Other Funding Required? {`${formData.sourceOtherFunding}`} <br />
        What Are The Barriers And Challenges To The Project?  {`${formData.barriersAndChallenges}`}<br />
        How Will The Project Be Monitored And Evaluated? {`${formData.projectMonitoredAndEvaluated}`}<br />
        How Will The Project Continue Once The Funding Has Been Used? {`${formData.projectContinuedOnceFunding}`}<br />
        Are You Working With Any Partner Organisations? {`${formData.partnerOrganisations}`}<br />
        Outline Any Existing Funding Or Reserves {`${formData.existingFundsOrReserves}`}<br />
      </div>
      <h4>
        Grant Request
        <button onClick={() => go("grantRequest")}>Edit</button>
      </h4>
      <div>
        Amount of Grant Requested(£): {`${formData.grantAmount}`} <br />
        Public Description of Project: {`${formData.publicDescriptionOfProject}`}
      </div>



      <div>
        <a>
        <div onClick={previous} className="readStory" id="back">
            <svg  transform="scale(-1, -1)" height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
            <h4 className="nextText" >Back</h4>
        </div>
        </a>
        <a>
          <div onClick={handleSubmission} className="readStory" id="next">

              <h4 className="nextText" >Submit</h4>
              <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
          </div>
        </a>
    </div>


    </div>
  );
};

export default Review;
