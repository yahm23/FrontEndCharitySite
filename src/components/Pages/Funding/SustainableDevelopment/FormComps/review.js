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
        <h4 className="detailTitle" >
            Your Details
            <button className="editFunding" onClick={() => go("details")}>Edit</button>
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
        <button  className="editFunding" onClick={() => go("projectDetails")}>Edit</button>
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
        <button  className="editFunding"  onClick={() => go("projectInPractise")}>Edit</button>
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
        <button className="editFunding" onClick={() => go("grantRequest")}>Edit</button>
      </h4>
      <div>
        Amount of Grant Requested(£): {`${formData.grantAmount}`} <br />
        Public Description of Project: {`${formData.publicDescriptionOfProject}`}
      </div>



      <div className="fundingNavDiv"> 
        <div onClick={previous} id="back">
          <input  id="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div id="next">
            <input onClick={handleSubmission} id="fundingNavButtons" type="submit" value="Next" ></input>
        </div>

      </div>


    </div>
  );
};

export default Review;
