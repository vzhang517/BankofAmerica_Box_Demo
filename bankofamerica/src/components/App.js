import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UploadPage from "./Pages/UploadPage";
import UploadSuccess from "./Pages/UploadSuccess";

import "./_App.scss";

class App extends React.Component {    
  
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
