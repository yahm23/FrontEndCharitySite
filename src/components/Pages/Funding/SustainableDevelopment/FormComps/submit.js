import React from "react";
const Submit = ({ navigation, formData }) => {
  const { go } = navigation;
  const {formDeets} = formData
  return (
    <div>
      <h3>Thank you for submitting. We will be in touch</h3>
      <button onClick={() => go("details")}>New Request</button>
    </div>
  );
};

export default Submit;
