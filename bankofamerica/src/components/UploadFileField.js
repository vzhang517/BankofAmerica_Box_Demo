import React from 'react';

class UploadFileField extends React.Component {
    render() {
        return (
            <input type="file" name="file" onChange={this.onChangeHandler}/>
        )
    }

}

export default UploadFileField;