import React from "react";

import UploadFileForm from "../UploadFileForm";

const UploadPage = ({onClick}) => {
  return (
    <div>
      <UploadFileForm onClick={onClick}/>
    </div>
  );
};

export default UploadPage;