import React from 'react';
import axios from 'axios';

class UploadFileForm extends React.Component {
    state = { fullname: "", selectedFile: null};

    // Sets state to whatever is being typed in the input
    onInputChange = event => {
      this.setState({ fullname: event.target.value });
      console.log(this.state.fullname);
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
   // onClickHandler = () => {
      //this.props.onClick(this.state.fullname, this.state.selectedFile);
    //};

    onClickHandler = async(fullname, selectedFile) => {
      const data = new FormData()
      data.append('name', this.state.fullname)
      data.append('file', this.state.selectedFile)
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
            <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              value={this.state.fullname}
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