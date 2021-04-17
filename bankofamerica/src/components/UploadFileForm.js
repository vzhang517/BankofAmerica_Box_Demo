import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import "./_UploadFileForm.scss";


class UploadFileForm extends React.Component {
    state = { accountNo: "", selectedFile: null};

    // Sets state to whatever is being typed in the input
    onInputChange = event => {
      this.setState({ accountNo: event.target.value });
    };
  
    // Preventing submit from hitting enter key
    onFormSubmit = event => {
      event.preventDefault();
    };

    //setting the state to the file once it is uploaded in the field
    onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    };

    //runs onClickHandler function in App.js, passes the name and file from the state in this component to run the ajax call in App.js
    onClickHandler = async() => {
      const data = new FormData()
      data.append('accountNum', this.state.accountNo)
      data.append('file', this.state.selectedFile)
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
          <form onSubmit={this.onFormSubmit}>
            <div className="uploadfileform_inputs">
              <div>
                <label className="uploadfileform_label">Account Number*</label>
                <input
                  type="text"
                  value={this.state.accountNo}
                  onChange={this.onInputChange}
                />
              </div>
              <div>
              <label className="uploadfileform_label">Upload File*</label>
                <label className="uploadfileform_customuploadbutton">
                  <input type="file" onChange={this.onChangeHandler}/>
                   File
                </label>
              </div>
            </div>
            <button type="button" className="uploadfileform_submitbutton" onClick={this.onClickHandler}>Submit</button> 
          </form>

            
        )
    }

}

export default withRouter(UploadFileForm);