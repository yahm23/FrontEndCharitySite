import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3 style="text-align:center" >Thank you for your submission, we'll be in touch shortly</h3>

        <a href="javascript:void(0);">
          <div onClick={() => {
        window.location.reload(false);
        go("details")
        
        }} className="readStory" id="newReq">
              <h4 className="nextText" >New Request</h4>
          </div>
        </a>
    </div>
  );
};

export default Submit;
