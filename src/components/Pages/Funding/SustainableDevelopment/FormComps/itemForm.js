import React from "react";

const ItemForm = ({ label, children, type = "text",required, ...otherProps }) => (
    
    <div>
        {(() => {
            switch (type) {
                case "text":
                    return <div className="space">
                            <label>{label}</label>
                            <input  type={type}  {...otherProps} />
                            </div>   
                case "email":
                    return <div className="space">
                                <label>{label}</label>
                                <input  type="email"  {...otherProps} />
                            </div>
                case "number":
                    return <div className="space">
                                <label>{label}</label>
                                <input  type="number"  {...otherProps} />
                            </div>
                case "textarea":
                    return <div className="space">
                                <label>{label}</label>
                                <br></br>
                                <textarea id="msg" rows="1" cols="33"  type="number"  {...otherProps} />
                            </div>
                default:
                    return null;
            }
        })()}
    </div>
)
export default ItemForm;
