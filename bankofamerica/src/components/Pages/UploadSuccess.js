import React from "react";

import "./_UploadSuccess.scss";

const UploadSuccess = ({firstName}) => {
  return (
    <div className="uploadsuccess_container">
      <p className="uploadsuccess_titletext">{firstName}, your application is in review</p>
      <p className="uploadsuccess_subtext">Thanks for choosing Bank of America. We're carefully reviewing your application and need to check a few more things. We appreciate your patience.</p>
    </div>
  );
};

export default UploadSuccess;