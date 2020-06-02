import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    outcomeOrBenefitOfProjec,
    projectName,
    organisationName,
    companyRegistrationOrCharityNumber,
    sourceOtherFunding,
    position,
    contactNumber,
    contactName,
    barriersAndChallenges,
    projectNeeded,
    publicDescriptionOfProject,
    whoWillProjectImpact,
    partnerOrganisations,
    projectOverview,
    communityImpactOfProject,
    grantAmount,
    projectMonitoredAndEvaluated,
    projectDemonstratio,
    emailAddress,
    projectContinuedOnceFunding,
    contactEmail,
    existingFundsOrReserves
  } = formData;
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
            Contact Email: {`${contactEmail}`}<br />
            Contact Name: {`${contactName}`}<br />
            Position: {`${position}`}<br />
            Organisation Name: {`${organisationName}`}<br />
            Company Registration / Charity Number: {`${companyRegistrationOrCharityNumber}`}<br />
            Contact Number: {`${contactNumber}`}<br />
            Contact Number: {`${contactNumber}`}<br />
            Contact Email: {`${contactEmail}`}<br />
        </div>

        <h4>
        Project Details
        <button onClick={() => go("projectDetails")}>Edit</button>
      </h4>
      <div>
        Name of Project: {`${projectName}`} <br />
        Why Is The Project Needed?  {`${projectNeeded}`} <br />
        Who Will Be Impacted By The Project? {`${whoWillProjectImpact}`}<br />
        What Is The Outcome Or Benefit Of The Project?  {`${outcomeOrBenefitOfProjec}`}<br />
        What Is The Community Impact?  {`${communityImpactOfProject}`}<br />
        How Does This Project Demonstrate Sustainability Or Conservation?  {`${projectDemonstratio}`}<br />
      </div>
      <h4>
        Project in Practise
        <button onClick={() => go("projectInPractise")}>Edit</button>
      </h4>
      <div>
        How Will You Source Other Funding Required? {`${sourceOtherFunding}`} <br />
        What Are The Barriers And Challenges To The Project?  {`${barriersAndChallenges}`}<br />
        How Will The Project Be Monitored And Evaluated? {`${projectMonitoredAndEvaluated}`}<br />
        How Will The Project Continue Once The Funding Has Been Used? {`${projectContinuedOnceFunding}`}<br />
        Are You Working With Any Partner Organisations? {`${partnerOrganisations}`}<br />
        Outline Any Existing Funding Or Reserves {`${existingFundsOrReserves}`}<br />
      </div>
      <h4>
        Grant Request
        <button onClick={() => go("grantRequest")}>Edit</button>
      </h4>
      <div>
        Amount of Grant Requested(£): {`${grantAmount}`} <br />
        Public Description of Project: {`${publicDescriptionOfProject}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
