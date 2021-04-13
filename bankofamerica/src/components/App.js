import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';

import UploadPage from "./Pages/UploadPage";
import UploadSuccess from "./Pages/UploadSuccess";



class App extends React.Component {

  onSubmit = async() => {
        const data = new FormData()
        data.append('name', this.state.fullname)
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
          // receive two    parameter endpoint url ,form data
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
            <img></img>
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
