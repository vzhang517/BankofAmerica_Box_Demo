import React from "react";

import UploadFileForm from "../UploadFileForm";

import "./_UploadPage.scss";

const UploadPage = ({passName}) => {
  return (
    <div className="uploadpage_container">
      <p className="uploadpage_titletext">Submit my loan application</p>
      <p className="uploadpage_subtext">For your security, please submit enter the following information along with your file. This helps us verify that you are the applicant.</p>
      <UploadFileForm passName={passName}/>
    </div>
  );
};

export default UploadPage;