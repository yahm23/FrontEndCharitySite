import React, {useState} from "react";
import backendURL from '../../../../backendURLs.js'
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

const Review = ({ formData, navigation }) => {
  let isMobile = useMediaQuery({ maxWidth: 767 });

  // const formDataToSubmit = formData;
  const { go , previous } = navigation;
  const [show, setShow] = useState(false);
  
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true)

  const PopUp =()=>{
    return(
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle>Incomplete Fields</ModalTitle>
        </ModalHeader>
        <ModalBody>
          You must ensure all fields are filled in before submission.
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
          {/* <Button variant="primary">Ok</Button> */}
        </ModalFooter>
      </Modal> 
    )
}

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
    const postURL = `${backendURL}/fuel-hardship-funds`;

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
      handleShow()
    }
  }

  const renderSwitch = (key) => {
    switch(key) {
      case 'driversLicense':
        return <li key={key}> Proof Of Address - Drivers License</li>
      case 'utilityBill':
        return <li key={key}> Proof Of Address - Utility Bill</li>
      case 'contract':
        return <li key={key}> Proof Of Income - Employment Contract</li>
      case 'payslips':
        return <li key={key}> Proof Of Income - 3 Months Payslips</li>
      case 'emailHR':
        return <li key={key}> Proof Of Income - Email From Employer's HR Department</li>
      case 'bankStatements':
        return <li key={key}> Proof Of Income - Bank Statements</li>
      case 'energySupplierStatement':
        return <li key={key}> Energy Account - Energy Supplier Statement</li>
      case 'energySupplierEmail':
        return <li key={key}> Energy Account - Energy Supplier Emai</li>
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
      <h2>Review Your Application</h2>
      <PopUp></PopUp>
        <h3>
            Your Details
            <button className="editFunding" onClick={() => go("details")}>Edit</button>
        </h3>
        <div>
        <b>Email Address:</b> {`${formData.emailAddress}`}<br />
        <b>Contact Name: </b>{`${formData.contactName}`}<br />
        <b>Position:</b> {`${formData.position}`}<br />
        <b>Organisation Name:</b> {`${formData.organisationName}`}<br />
        <b>Company Registration / Charity Number:</b> {`${formData.companyRegistrationOrCharityNumber}`}<br />
        <b>Contact Number:</b> {`${formData.contactNumber}`}<br />
        <b>Contact Email: </b>{`${formData.contactEmail}`}<br />
        </div>

        <h3>
        Impacted Individual Details
        <button  className="editFunding" onClick={() => go("impactedIndividualDetails")}>Edit</button>
      </h3>
      <div>
      <b>Name of Impacted Individual: </b>{`${formData.nameOfImpactedIndividual}`} <br />
      <b>Has The Individual Applied Before?</b> {`${formData.appliedBefore? "Yes":"No"}`} <br />
      <b>Time Since Last Application (if applicable)</b>  {`${formData.timeSinceLastApplication}`} <br />
      <b>Full Address: </b>{`${formData.fullAddress}`}<br />
      <b>Contact Number: </b>{`${formData.impactedIndividualContactNumber}`}<br />
      <b>Contact Email: </b>{`${formData.impactedIndividualContactEmail}`}<br />
      <b>Number of Children:</b> {`${formData.numberOfChildren}`}<br />
      <b>Current Employment Situation:</b>{`${formData.currentEmploymentSituation}`}<br />
      <b>Household Income Per Year:</b>  {`${formData.householdIncomPerYear}`}<br />
      </div>
        
        <h3>
        Energy Accounts
        <button className="editFunding" onClick={() => go("impactedIndividualDetails")}>Edit</button>
      </h3>
      <div>
      <b>Name of Electricity Supplier: </b>{`${formData.nameOfElectricSupplier}`} <br />
      <b>Electricity Account Number: </b>{`${formData.electricAccountNumber}`} <br />
      <b>Name of Gas Supplier: </b>{`${formData.nameOfGasSupplier}`} <br />
      <b>Gas Account Number: </b>{`${formData.gasAccountNumber}`} <br />
      <b>Credit Meter or Prepayment? </b>{`${formData.creditOrPrepayment}`}<br />
      <b>Monthly Direct Debit Amount(£): </b> {`${formData.monthlyDirectDebitAmount}`}<br />
      <b>Current Balance on Account(£):</b>  {`${formData.currentBalanceOnAccount}`}<br />
      <b>Has the Customer had a payment plan previously?</b>  {`${formData.hasCustomerHadPaymentPlanPreviously ? "Yes":"No"}`}<br />
      </div>
      <h3>
        Grant Request
        <button className="editFunding" onClick={() => go("grantRequest")}>Edit</button>
      </h3>
      <div>
      <b>Amount of Grant Requested(£):</b> {`${formData.grantAmount}`} <br />
      <b>Evidence to be Provided:</b> 
        <EvidenceProvider>
        </EvidenceProvider>
      </div>
      



      <div className="fundingNavDiv"> 
        <div onClick={previous}>
          <input id={isMobile? "back-mobile":"back"} className="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div>
            <input id={isMobile? "next-mobile":"next"} onClick={handleSubmission} className="fundingNavButtons" type="submit" value="Submit" ></input>
        </div>
      </div>
    </div>
  );
};

export default Review;
