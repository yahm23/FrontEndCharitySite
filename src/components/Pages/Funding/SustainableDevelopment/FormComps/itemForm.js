import React from "react";

const ItemForm = ({ label, children, type = "text",required, ...otherProps }) => (
    
    <div>
        {(() => {
            switch (type) {
                case "text":
                    return <div className="space">
                            <label>{label}</label>
                            <input required type={type} {...otherProps} />
                            </div>   
                case "email":
                    return <div className="space">
                                <label>{label}</label>
                                <input required type="email" {...otherProps} />
                            </div>
                case "number":
                    return <div className="space">
                                <label>{label}</label>
                                <input required type="number" {...otherProps} />
                            </div>
                default:
                    return null;
            }
        })()}
    </div>
)
export default ItemForm;