import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';

import UploadPage from "./Pages/UploadPage";
import UploadSuccess from "./Pages/UploadSuccess";

import "./_App.css";

class App extends React.Component {

  onSubmit = async(accountNo, selectedFile) => {
        const data = new FormData()
        data.append('accountNum', accountNo)
        data.append('file', selectedFile)
        axios({
          method: "post",
          url: "http://localhost:8000/upload",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(res => { 
          if (res.status===200)
          {
            this.props.history.push("/success");
          }
      })
    };

    
  
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <img src="./img/Header.JPG" className="header" ></img>
            <Route
              path="/"
              exact
              render={() => (
                <UploadPage
                  onClick={this.onSubmit}

                />
              )}
            />
            <Route
              path="/success"
              exact
              render={() => (
                <UploadSuccess/>
              )}
            />

          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
