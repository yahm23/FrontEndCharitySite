import React from "react";

const Review = ({ formData, navigation }) => {

  // const formDataToSubmit = formData;
  const { go } = navigation;

//   const fieldCheck=()=>{
//     let x =0;
//     let entries = Object.values(formData)
//     console.log(entries);
    
//     entries.forEach(entry=>{
//       if(entry===''){
//         x += 1 ;
//         console.log(x);
        
//       }else{
//         console.log(x);
//       }
//     })

//     if(x===0){
//       return true
//     }else{
//       return false
//     }
//   }

  const submit = (formDataToSubmit)=>{
    const postURL = "https://blog-back-end-green.herokuapp.com/fuel-hardship-funds";

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
        console.log(formDataToSubmit);
        
    })
  }

  const handleSubmission=()=>{
      submit(formData);
      go("submit")
      
    // if(fieldCheck()){

    // }else{
    //   window.alert("Please make sure you've filled in all entries in the form") 
    // }
  }


  return (
    <div className="form">
      <h3>Review your data</h3>
        <h4>
            Your Details
            <button onClick={() => go("details")}>Edit</button>
        </h4>
        <div>
            Email Address: {`${formData.emailAddress}`}<br />
            Contact Name: {`${formData.contactName}`}<br />
            Position: {`${formData.position}`}<br />
            Organisation Name: {`${formData.organisationName}`}<br />
            Company Registration / Charity Number: {`${formData.companyRegistrationOrCharityNumber}`}<br />
            Contact Number: {`${formData.contactNumber}`}<br />
            Contact Email: {`${formData.contactEmail}`}<br />
        </div>

        <h4>
        Impacted Individual Details
        <button onClick={() => go("projectDetails")}>Edit</button>
      </h4>
      <div>
        Name of Impacted Individual: {`${formData.nameOfImpactedIndividual}`} <br />
        Has The Individual Applied Before? {`${formData.appliedBefore}`} <br />
        Time Since Last Application (if applicable)  {`${formData.timeSinceLastApplication}`} <br />
        Full Address: {`${formData.fullAddress}`}<br />
        Contact Number:  {`${formData.impactedIndividualContactNumber}`}<br />
        Contact Email:  {`${formData.impactedIndividualContactEmail}`}<br />
        Number of Children:  {`${formData.numberOfChildren}`}<br />
        Current Employment Situation:  {`${formData.currentEmploymentSituation}`}<br />
        Household Income Per Year:  {`${formData.householdIncomPerYear}`}<br />
      </div>
      {/* <h4>
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
      </div> */}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
