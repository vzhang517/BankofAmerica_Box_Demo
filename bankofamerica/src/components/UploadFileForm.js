import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import "./_UploadFileForm.scss";


class UploadFileForm extends React.Component {
  state = { firstName: "" , lastName: "", accountNo: "", selectedFile: null, selectedFilename:"No File Selected"};

    // Sets state to whatever is being typed in the input
    onInputChange = event => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    };
  
    // Preventing submit from hitting enter key
    onFormSubmit = event => {
      event.preventDefault();
    };

    //setting the state to the file once it is uploaded in the field
    onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files[0],
        selectedFilename: event.target.files[0].name
      })
    };

    // Does call to server.js with the account No and file info from the state in this component 
    onClickHandler = async() => {
      //set the first and last name state in App.js to the first and last name state of this component
      this.props.passName(this.state.firstName, this.state.lastName);
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
          <form onSubmit={this.onFormSubmit} className="uploadfileform_form">
            <div className="uploadfileform_inputs">
            <div className="uploadfileform_input">
                <label>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="uploadfileform_input">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="uploadfileform_input">
                <label>Account Number*</label>
                <input
                  type="text"
                  name="accountNo"
                  onChange={this.onInputChange}
                />
              </div>
              <div>
                <label className="uploadfileform_uploadlabel">Loan Application*</label>
                <div className="uploadfileform_filecontainer">
                  <input type="file" onChange={this.onChangeHandler} id="realbutton" hidden/>
                  <label htmlFor="realbutton" className="uploadfileform_choosefilelabel">Choose File</label>
                  <div className="uploadfileform_filechosen">{this.state.selectedFilename}</div>
                </div>
              </div>
            </div>
            <button type="button" className="uploadfileform_submitbutton" onClick={this.onClickHandler}>Submit</button> 
          </form>
    
        )
    }

}

export default withRouter(UploadFileForm);