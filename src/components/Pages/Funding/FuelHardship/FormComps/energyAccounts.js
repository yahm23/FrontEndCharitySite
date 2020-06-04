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

  let [selectedBoolean,setBoolean] = useState(false);

  const booleanChange =(event)=>{
    setBoolean(event.target.value);
    formData.hasCustomerHadPaymentPlanPreviously = event.target.value;
    
  }

  return (
    <div className="form">
    <h2>Apply - Energy Accounts</h2> <h3>Please ensure all fields are filled in</h3>
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
      />

        <div>
            <label>Credit Meter or Prepayment?</label>
            <select
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
        />

        <ItemForm
        label="Current Balance On Account (£)"
        name="currentBalanceOnAccount"
        value={currentBalanceOnAccount}
        onChange={setForm}
      />
        <>
        <label>Has The Customer Had A Payment Plan Previously?</label>
            <br></br>
            <label htmlFor="yes">Yes</label>
            <input id="yes" name="applied" type="radio" value={true} onChange={booleanChange}></input>
                
            <label htmlFor="no">No</label>
            <input id="no" name="applied" type="radio" value={false} defaultChecked onChange={booleanChange}></input>
            
       </>
      <a href="javascript:void(0);">
        <div onClick={previous} className="readStory" id="back">
          <svg  transform="scale(-1, -1)" height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
          <h4 className="nextText" >Back</h4>
        </div>
      </a>

      <a href="javascript:void(0);">
      <div onClick={next} className="readStory" id="next">
          <h4 className="nextText" >Next</h4>
          <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
      </div>
      </a>

    </div>
  );
};

export default EnergyAccounts;
