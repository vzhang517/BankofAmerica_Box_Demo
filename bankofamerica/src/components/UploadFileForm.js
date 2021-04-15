import React from 'react';
import axios from 'axios';

class UploadFileForm extends React.Component {
    state = { accountNo: "", selectedFile: null};

    // Sets state to whatever is being typed in the input
    onInputChange = event => {
      this.setState({ accountNo: event.target.value });
      console.log(this.state.accountNo);
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
          <div>
            <label>Account Number</label>
            <input
              type="text"
              value={this.state.accountNo}
              onChange={this.onInputChange}
            />
          </div>
          <label>Select a file:</label>
          <input type="file" name="file" onChange={this.onChangeHandler}/>
          <button type="button" onClick={this.onClickHandler}>Submit</button> 
        </form>

            
        )
    }

}

export default UploadFileForm;