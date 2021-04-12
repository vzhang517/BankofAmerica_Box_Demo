import React from "react";

import InputField from "../InputField";
import UploadFileField from "../UploadFileField";
import SubmitButton from "../SubmitButton";
import "./_UploadPage.css";

const UploadPage = () => {
  return (
    <div className="form_container">
        <InputField/>
        <UploadFileField/>
        <SubmitButton/>
    </div>
  );
};

export default UploadPage;