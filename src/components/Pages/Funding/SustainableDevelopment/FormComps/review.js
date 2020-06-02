import React from "react";

const Review = ({ setForm, formData, navigation }) => {

    // const formDataToSubmit ={
    //   outcomeOrBenefitOfProject:outcomeOrBenefitOfProject,
    //   projectName: projectName,
    //   organisationName: organisationName,
    //   companyRegistrationOrCharityNumber:companyRegistrationOrCharityNumber,
    //   sourceOtherFunding:sourceOtherFunding,
    //   position: position,
    //   contactNumber: 0,
    //   contactName: "",
    //   barriersAndChallenges: "",
    //   projectNeeded: "",
    //   publicDescriptionOfProject: "",
    //   whoWillProjectImpact: "",
    //   partnerOrganisations: "",
    //   projectOverview: " ",
    //   communityImpactOfProject: "",
    //   grantAmount: 0,
    //   projectMonitoredAndEvaluated: "",
    //   projectDemonstratio: "",
    //   emailAddress: "",
    //   projectContinuedOnceFunding: "",
    //   contactEmail: "",
    //   existingFundsOrReserves: ""
    // }
    const formDataToSubmit = formData;


  // const handleSubmission=()=>{
  //       if(formData.forEach(entry => {
  //           if (entry){
  //               return true;
  //           } else {
  //               return false
  //           }

  //       }))
  //       {
  //        window.alert("Please make sure you've filled in all entries to the form") 
  //       }else{
  //           window.alert("Submitted technically")
  //       }
  // }

  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
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
        How Does This Project Demonstrate Sustainability Or Conservation?  {`${formData.projectDemonstratio}`}<br />
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
        <button onClick={()=>go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
