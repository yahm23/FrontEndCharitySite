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

  const { next } = navigation;

  let [selectedBoolean,setBoolean] = useState(false);

  const booleanChange =(event)=>{
    setBoolean(event.target.value);
    formData.hasCustomerHadPaymentPlanPreviously = event.target.value;
    
  }

  return (
    <div className="form">
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
      
      
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default EnergyAccounts;
