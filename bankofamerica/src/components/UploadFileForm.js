import React from 'react';

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
    onClickHandler = () => {
      this.props.onClick(this.state.accountNo, this.state.selectedFile);
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

export default UploadFileForm;