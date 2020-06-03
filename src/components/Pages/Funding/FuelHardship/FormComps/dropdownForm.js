import React from "react";

const DropdownForm = ({ optionsObject,label, ...otherProps }) => (
    
    <div className="space">
        <label>{label}</label>
        <select>    
            {optionsObject.map(option=>(
                <option value={option.strapiValue} key={option.strapiValue}>{option.name}</option>
            ))}
        </select>
    </div>   


)
export default DropdownForm;
