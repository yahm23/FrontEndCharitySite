import React, {useState} from "react";

import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";

const GrantRequest = ({ setForm, formData, navigation }) => {
    const { grantAmount,
        evidenceProvided,
        confirmGrantOnlyForEnergy

      } = formData;

  const { next } = navigation;

  let [selectedBoolean,setBoolean] = useState(false);
  let [checkbox,setCheckbox] = useState();

  const booleanChange =(event)=>{
    setBoolean(event.target.value);
    formData.confirmGrantOnlyForEnergy = event.target.value;
  }

  const toggleBoolean =(event)=>{
    setCheckbox(event.target.value)
    
    console.log("value at start of click "+ eval(event.target.value).toString());
    
    let value = eval(event.target.value);
    let opposite = !value;

    console.log("The opposite of that initial value "+ opposite);

    console.log("opposite "+opposite);
    //try checking this below
    var fn = eval(`${event.target.value} = ${opposite}`);
  //   fn = opposite;
    console.log("the changed field of object is now "+eval(event.target.value.toString()));
  //   eval(event.target.value) = value
  }


  return (
    <div className="form">
       <h3>Please ensure all fields are filled in</h3>

      <ItemForm
        label="Amount of Grant Requested (£) *"
        name="grantAmount"
        value={grantAmount}
        onChange={setForm}
        type="number"
        required
      />

      <>
          <input type="checkbox" defaultChecked={evidenceProvided.driversLicense} id="license" name="license" onChange={toggleBoolean} value="evidenceProvided.driversLicense"></input>
          <label htmlFor="license">{evidenceProvided.driversLicense.toString()} Proof Of Address - Drivers License</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.utilityBill} id="utlitity" name="utlitity" onChange={toggleBoolean} value="evidenceProvided.utilityBill"></input>
          <label htmlFor="utlitity">{evidenceProvided.utilityBill.toString()} Proof Of Address - Utility Bill</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.contract} id="contract" name="contract" onChange={toggleBoolean} value="evidenceProvided.contract"></input>
          <label htmlFor="contract"> {evidenceProvided.contract.toString()} Proof Of Income - Employment Contract</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.payslips} id="payslips" name="payslips"  onChange={toggleBoolean} value="evidenceProvided.payslips"></input>
          <label htmlFor="payslips"> {evidenceProvided.payslips.toString()} Proof Of Income - 3 Months Payslips</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.emailHR} id="HR" name="HR"  onChange={toggleBoolean} value="evidenceProvided.emailHR"></input>
          <label htmlFor="HR">{evidenceProvided.emailHR.toString()} Proof Of Income - Email From Employer's HR Department</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.bankStatements} id="statements" name="statements" onChange={toggleBoolean} value="evidenceProvided.bankStatements"></input>
          <label htmlFor="statements">{evidenceProvided.bankStatements.toString()} Proof Of Income - Bank Statements</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.energySupplierStatement} id="energy" name="energy" onChange={toggleBoolean} value="evidenceProvided.energySupplierStatement"></input>
          <label htmlFor="energy"> {evidenceProvided.energySupplierStatement.toString()}Energy Account - Energy Supplier Statement</label><br></br>

          <input type="checkbox" defaultChecked={evidenceProvided.energySupplierEmail}id="energyemail" name="energyemail" onChange={toggleBoolean} value="evidenceProvided.energySupplierEmail"></input>
          <label htmlFor="energyemail"> {evidenceProvided.energySupplierEmail.toString()} Energy Account - Energy Supplier Email</label><br></br>

      </>

      <>
          <label>Please Confirm The Full Grant Will Be Used For Energy Payments Only </label>
              <br></br>
              <label htmlFor="yes">Yes</label>
              <input id="yes" name="applied" type="radio" value={true} onChange={booleanChange}></input>
                  
              <label htmlFor="no">No</label>
              <input id="no" name="applied" type="radio" value={false} defaultChecked onChange={booleanChange}></input>
              
        </>
      
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default GrantRequest;
