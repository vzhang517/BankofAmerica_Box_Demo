import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UploadPage from "./Pages/UploadPage";
import UploadSuccess from "./Pages/UploadSuccess";

import "./_App.scss";

class App extends React.Component {    
  state = { firstName: "" , lastName: ""};

  //used to set first and last name on of this parent component to the states in UploadFileForm.js
  passName = (firstName, lastName) =>{
    this.setState({
      firstName: firstName,
      lastName: lastName
    });
  }
  
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
                  passName={this.passName}

                />
              )}
            />
            <Route
              path="/success"
              exact
              render={() => (
                <UploadSuccess
                  firstName={this.state.firstName}
                />
              )}
            />

          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
