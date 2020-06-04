import React from "react";

const Review = ({ formData, navigation }) => {

  // const formDataToSubmit = formData;
  const { go , previous } = navigation;

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
      //  CHANGE BACK TO FALSE WHEN DONE TESTING
      return false
    }
  }

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
    if(fieldCheck()){
      submit(formData);
      go("submit")

    }else{
      window.alert("Please make sure you've filled in all entries in the form") 
    }
  }

  const renderSwitch = (key) => {
    switch(key) {
      case 'driversLicense':
        return <li key={key}>Proof Of Address - Drivers License</li>
      case 'utilityBill':
        return <li key={key}>Proof Of Address - Utility Bill</li>
      case 'contract':
        return <li key={key}>Proof Of Income - Employment Contract</li>
      case 'payslips':
        return <li key={key}>Proof Of Income - 3 Months Payslips</li>
      case 'emailHR':
        return <li key={key}>Proof Of Income - Email From Employer's HR Department</li>
      case 'bankStatements':
        return <li key={key}>Proof Of Income - Bank Statements</li>
      case 'energySupplierStatement':
        return <li key={key}>Energy Account - Energy Supplier Statement</li>
      case 'energySupplierEmail':
        return <li key={key}>Energy Account - Energy Supplier Emai</li>
      default:
        return null;
    }
  }
  
  const EvidenceProvider =() => {
    let allEvidence= formData.evidenceProvided;
    let evidenceKV = Object.entries(allEvidence)
    let array = [];
    
    evidenceKV.forEach(evidence =>{
      if(evidence[1]){
        array.push(evidence[0])   
      }
    })    

    return (
      <>
      {array.map(key => (
        renderSwitch(key)
      ))}
      </>
    )
  }

  return (
    <div className="form">
      <h2>Review Your Data</h2>
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
        <button onClick={() => go("impactedIndividualDetails")}>Edit</button>
      </h4>
      <div>
        Name of Impacted Individual: {`${formData.nameOfImpactedIndividual}`} <br />
        Has The Individual Applied Before? {`${formData.appliedBefore? "Yes":"No"}`} <br />
        Time Since Last Application (if applicable)  {`${formData.timeSinceLastApplication}`} <br />
        Full Address: {`${formData.fullAddress}`}<br />
        Contact Number:  {`${formData.impactedIndividualContactNumber}`}<br />
        Contact Email:  {`${formData.impactedIndividualContactEmail}`}<br />
        Number of Children:  {`${formData.numberOfChildren}`}<br />
        Current Employment Situation:  {`${formData.currentEmploymentSituation}`}<br />
        Household Income Per Year:  {`${formData.householdIncomPerYear}`}<br />
      </div>
        
        <h4>
        Energy Accounts
        <button onClick={() => go("impactedIndividualDetails")}>Edit</button>
      </h4>
      <div>
        Name of Electricity Supplier: {`${formData.nameOfElectricSupplier}`} <br />
        Electricity Account Number: {`${formData.electricAccountNumber}`} <br />
        Name of Gas Supplier: {`${formData.nameOfGasSupplier}`} <br />
        Gas Account Number: {`${formData.gasAccountNumber}`} <br />
        Credit Meter or Prepayment? {`${formData.creditOrPrepayment}`}<br />
        Monthly Direct Debit Amount(£):  {`${formData.monthlyDirectDebitAmount}`}<br />
        Current Balance on Account(£):  {`${formData.currentBalanceOnAccount}`}<br />
        Has the Customer had a payment plan previously?  {`${formData.hasCustomerHadPaymentPlanPreviously ? "Yes":"No"}`}<br />
      </div>
      <h4>
        Grant Request
        <button onClick={() => go("grantRequest")}>Edit</button>
      </h4>
      <div>
        Amount of Grant Requested(£): {`${formData.grantAmount}`} <br />
        Evidence to be Provided: 
        <EvidenceProvider>
        </EvidenceProvider>
      </div>

      <div>
        <button onClick={previous}>Back</button>
      </div>
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
