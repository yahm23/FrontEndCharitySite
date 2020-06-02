import React from "react";

const ItemForm = ({ label, children, type = "text",required, ...otherProps }) => (
    
    //     {case type==="text"}
    
    //     {type === "text" ? (
        //       <>
        //         <label>{label}</label>
        //         <input type={type} {...otherProps} />
        //       </>
        //     ) : (
            //       <>
            //         <label>{label}</label>
            //         <input type={type} {...otherProps} />
            
            //       </>
            //     )}
<div>
    {(() => {
        switch (type) {
            case "text":
                return <>
                        <label>{label}</label>
                        <input required type={type} {...otherProps} />
                        </>    
            case "email":
                return <>
                            <label>{label}</label>
                            <input required type="email" {...otherProps} />
                        </> 
            case "number":
                return <>
                            <label>{label}</label>
                            <input required type="number" {...otherProps} />
                        </> 
            default:
                return null;
        }
    })()}
    </div>
)
export default ItemForm;
