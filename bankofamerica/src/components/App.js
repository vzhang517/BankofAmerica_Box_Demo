import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';

import UploadPage from "./Pages/UploadPage";
import UploadSuccess from "./Pages/UploadSuccess";



class App extends React.Component {

  onSubmit = async(fullname, selectedFile) => {
        const data = new FormData()
        data.append('name', fullname)
        data.append('file', selectedFile)
        console.log(data);
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
