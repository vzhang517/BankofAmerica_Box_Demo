import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UploadPage from "./Pages/UploadPage";
import UploadComplete from "./Pages/UploadComplete";



class App extends React.Component {
  
  render() {
    return (
      <div className="container">


        <UploadPage/>


      </div>
    );
  }
}

export default App;
