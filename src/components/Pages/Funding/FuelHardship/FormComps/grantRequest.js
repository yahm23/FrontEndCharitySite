import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button' 

const GrantRequest = ({ setForm, formData, navigation }) => {
    let isMobile = useMediaQuery({ maxWidth: 767 });
    const { grantAmount,
        evidenceProvided,
        confirmGrantOnlyForEnergy

      } = formData;

  const { next , previous} = navigation;

  let [selectedBoolean,setBoolean] = useState(false);
  let [checkbox,setCheckbox] = useState();

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
          <ModalTitle>Energy Grant Use</ModalTitle>
        </ModalHeader>
        <ModalBody>
          You must confirm the grant will only be used for energy payments
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
  const booleanChange =(event)=>{
    setBoolean(event.target.value);
    var isTrueSet = (event.target.value == 'true');
    formData.confirmGrantOnlyForEnergy = isTrueSet;
  }

  const toggleBoolean =(event)=>{
    setCheckbox(event.target.value)
    
    let value = eval(event.target.value);
    let opposite = !value;

    var fn = eval(`${event.target.value} = ${opposite}`);

  }

  const confirmationOfEnergyPaymentsOnly = (event)=> {
    event.preventDefault()
    // console.log(formData.confirmGrantOnlyForEnergy);
    
    if(formData.confirmGrantOnlyForEnergy===true){
      // console.log('This is the current bool' + formData.confirmGrantOnlyForEnergy);
      
      next();
    } else {
      event.preventDefault();
      console.log("inside the else");
      
      handleShow();
    }
  }


  return (
    <div className="form">
      <h2>Apply - Grant Request</h2> <h3>Please ensure all fields are filled in</h3>
      <PopUp></PopUp>
      <form onSubmit={confirmationOfEnergyPaymentsOnly}>
      <ItemForm
        label="Amount of Grant Requested (£) *"
        name="grantAmount"
        value={grantAmount}
        onChange={setForm}
        type="number"
        required
        />

      <>
        <label>What Evidence Will Be Provided? </label>
        <br></br>
        <br></br>
          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.driversLicense} id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.driversLicense"></input>
          <label htmlFor="license"> Proof Of Address - Drivers License</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.utilityBill} id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.utilityBill"></input>
          <label htmlFor="utlitity"> Proof Of Address - Utility Bill</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.contract} id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.contract"></input>
          <label htmlFor="contract"> Proof Of Income - Employment Contract</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.payslips} id="checkboxes"  onChange={toggleBoolean} value="evidenceProvided.payslips"></input>
          <label htmlFor="payslips">  Proof Of Income - 3 Months Payslips</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.emailHR} id="checkboxes"  onChange={toggleBoolean} value="evidenceProvided.emailHR"></input>
          <label htmlFor="HR"> Proof Of Income - Email From Employer's HR Department</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.bankStatements} id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.bankStatements"></input>
          <label htmlFor="statements"> Proof Of Income - Bank Statements</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.energySupplierStatement} id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.energySupplierStatement"></input>
          <label htmlFor="energy"> Energy Account - Energy Supplier Statement</label><br></br>

          <input id="checkboxes" type="checkbox" defaultChecked={evidenceProvided.energySupplierEmail}id="checkboxes" onChange={toggleBoolean} value="evidenceProvided.energySupplierEmail"></input>
          <label htmlFor="energyemail">  Energy Account - Energy Supplier Email</label><br></br>
        <br></br>

      </>

      <div className="spacex">
          <label>Please Confirm The Full Grant Will Be Used For Energy Payments Only </label>
              <br></br>
              <input id="yes" name="applied" type="radio" className="radioButton" value={true} defaultChecked={formData.confirmGrantOnlyForEnergy===true} onChange={booleanChange}></input>
              <label htmlFor="yes">Yes</label>
                  
              <br></br>
              <input id="no" name="applied" type="radio" className="radioButton" value={false} defaultChecked={formData.confirmGrantOnlyForEnergy===false} onChange={booleanChange}></input>
              <label htmlFor="no">No</label>
        </div>
      <div className="fundingNavDiv"> 
        <div onClick={previous} >
          <input id={isMobile? "back-mobile":"back"}  className="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div>
            <input id={isMobile? "next-mobile":"next"} className="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
      </div>
      
      </form>
    </div>
  );
};

export default GrantRequest;
