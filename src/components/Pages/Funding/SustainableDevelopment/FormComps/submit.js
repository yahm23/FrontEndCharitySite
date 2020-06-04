import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Thank you for your submission, we'll be in touch shortly</h3>
      <button onClick={() => {
        window.location.reload(false);
        go("details")
        
        }}>New Request</button>
    </div>
  );
};

export default Submit;
