import React from "react";

import UploadFileForm from "../UploadFileForm";

import "./_UploadPage.scss";

const UploadPage = ({onClick}) => {
  return (
    <div className="uploadpage_container">
      <p className="uploadpage_titletext">Submit my loan application</p>
      <p className="uploadpage_subtext">For your security, please submit your account number along with your file. This helps us verify that you are the applicant</p>
      <UploadFileForm onClick={onClick}/>
    </div>
  );
};

export default UploadPage;