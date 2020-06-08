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
      <h2>Review Your Application</h2>        
        <h3 className="detailTitle" >
          <strong>Your Details</strong>
            <button className="editFunding" onClick={() => go("details")}>Edit</button>
        </h3>
        <div>
          <b>Email Address:</b> {`${formData.emailAddress}`}<br />
          <b>Contact Name:</b> {`${formData.contactName}`}<br />
          <b>Position:</b>  {`${formData.position}`}<br />
          <b>Organisation Name:</b> {`${formData.organisationName}`}<br />
          <b>Company Registration / Charity Number: </b>{`${formData.companyRegistrationOrCharityNumber}`}<br />
          <b>Contact Number: </b>{`${formData.contactNumber}`}<br />
          <b>Contact Email:</b> {`${formData.contactEmail}`}<br />
        </div>

        <h3>
        Project Details
        <button  className="editFunding" onClick={() => go("projectDetails")}>Edit</button>
      </h3>
      <div>
        <b>Name of Project:</b>{`${formData.projectName}`} <br />
        <b>Full Overview of Project: </b>{`${formData.projectOverview}`} <br />
        <b>Why Is The Project Needed?  </b>{`${formData.projectNeeded}`} <br />
        <b>Who Will Be Impacted By The Project? </b>{`${formData.whoWillProjectImpact}`}<br />
        <b>What Is The Outcome Or Benefit Of The Project?</b> {`${formData.outcomeOrBenefitOfProject}`}<br />
        <b>What Is The Community Impact?</b> {`${formData.communityImpactOfProject}`}<br />
        <b>How Does This Project Demonstrate Sustainability Or Conservation?</b>  {`${formData.projectDemonstration}`}<br />
      </div>
      <h3>
        Project in Practise
        <button  className="editFunding"  onClick={() => go("projectInPractise")}>Edit</button>
      </h3>
      <div>
        <b>How Will You Source Other Funding Required?</b> {`${formData.sourceOtherFunding}`} <br />
        <b>What Are The Barriers And Challenges To The Project?</b>{`${formData.barriersAndChallenges}`}<br />
        <b>How Will The Project Be Monitored And Evaluated? </b>{`${formData.projectMonitoredAndEvaluated}`}<br />
        <b>How Will The Project Continue Once The Funding Has Been Used? </b>{`${formData.projectContinuedOnceFunding}`}<br />
        <b>Are You Working With Any Partner Organisations? </b>{`${formData.partnerOrganisations}`}<br />
        <b>Outline Any Existing Funding Or Reserves </b>{`${formData.existingFundsOrReserves}`}<br />
      </div>
      <h3>
        Grant Request
        <button className="editFunding" onClick={() => go("grantRequest")}>Edit</button>
      </h3>
      <div>
        <b>Amount of Grant Requested(£):</b> {`${formData.grantAmount}`} <br />
        <b>Public Description of Project:</b>{`${formData.publicDescriptionOfProject}`}
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
