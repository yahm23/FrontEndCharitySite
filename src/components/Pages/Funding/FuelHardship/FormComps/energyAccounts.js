import React, {useState} from "react";

import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";

const EnergyAccounts = ({ setForm, formData, navigation }) => {
  const { 
      electricAccountNumber,
      nameOfElectricSupplier,
      nameOfGasSupplier,
      gasAccountNumber,
      creditOrPrepayment,
      monthlyDirectDebitAmount,
      currentBalanceOnAccount,
      hasCustomerHadPaymentPlanPreviously
        } = formData;

  const { next, previous } = navigation;

  // let [selectedBoolean,setBoolean] = useState(false);

  const booleanChange =(event)=>{
    // setBoolean(event.target.value);
    formData.hasCustomerHadPaymentPlanPreviously = event.target.value;
    
  }

  return (
    <div className="form">
    <h2>Apply - Energy Accounts</h2> <h3>Please ensure all fields are filled in</h3>

    <form onSubmit={()=>{next()}}> 

      <ItemForm
        label="Name of Electricity Supplier"
        name="nameOfElectricSupplier"
        value={nameOfElectricSupplier}
        onChange={setForm}
        />
      
   
      <ItemForm
        label="Electricity Account Number"
        name="electricAccountNumber"
        value={electricAccountNumber}
        onChange={setForm}
        type="tel"
        />

      <ItemForm
        label="Name of Gas Supplier"
        name="nameOfGasSupplier"
        value={nameOfGasSupplier}
        onChange={setForm}
        />
      <ItemForm
        label="Gas Account Number"
        name="gasAccountNumber"
        value={gasAccountNumber}
        onChange={setForm}
        type="tel"
        />

        <div>
            <label>Credit Meter or Prepayment?</label>
            <br></br>
            <select
            id="funding"
            name="creditOrPrepayment"
            value={creditOrPrepayment}
            onChange={setForm}>
                <option defaultValue value="Credit Meter">Credit Meter</option>
                <option value="Prepayment Meter">Prepayment Meter</option>
            </select>
        </div>

        <ItemForm
            label="Monthly Direct Debit Amount (£)"
            name="monthlyDirectDebitAmount"
            value={monthlyDirectDebitAmount}
            onChange={setForm}
            type="number"
            />

        <ItemForm
        label="Current Balance On Account (£)"
        name="currentBalanceOnAccount"
        value={currentBalanceOnAccount}
        onChange={setForm}
        type="number"
        />
        <div className="spacex">
        <label>Has The Customer Had A Payment Plan Previously?</label>
            <br></br>
            <input id="yes" className="radioButton" name="applied" type="radio" value={true} onChange={booleanChange}></input>
            <label htmlFor="yes">Yes</label>   
            <br></br>
            <input id="no" className="radioButton" name="applied" type="radio" value={false} defaultChecked onChange={booleanChange}></input>
            <label htmlFor="no">No</label>
            
       </div>
      <div className="fundingNavDiv"> 
        <div onClick={previous} id="back">
          <input id="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div   id="next">
            <input id="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
      </div>

    </form>
    </div>
  );
};

export default EnergyAccounts;
