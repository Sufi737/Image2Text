import React from "react";
import axios from "axios";

class ImageUpload extends React.Component {

    handleFile = (e) => {
        let file = e.target.files[0]
        this.setState({file: file})
    }

    callUploadImageEndpoint = () => {
        let file = this.state.file
        let formData = new FormData();
        formData.append('image', file)
        formData.append('selectedOptions', JSON.stringify(this.props.selectedOptions))
        console.log(this.props.selectedOptions)
        axios({
            method: 'post',
            contentType: "application/json; charset=utf-8",
            url: 'http://localhost:8080/image/extract',
            data: formData
        }).then(
            (res) => {
                console.log(res)
                this.props.setResponse(res)
            }
        )
    }

    render() {
      return <div>
            <label>Upload Image</label>
            <input type="file" id="image" name="image" onChange={(e) => this.handleFile(e)} />
            <input type="submit" value="Upload" onClick={this.callUploadImageEndpoint}/>
        </div>
    }
}

export default ImageUpload;