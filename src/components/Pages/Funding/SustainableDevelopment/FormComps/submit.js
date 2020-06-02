import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Thank you for submitting. We will be in touch</h3>
      <button onClick={() => go("names")}>New Request</button>
    </div>
  );
};

export default Submit;
