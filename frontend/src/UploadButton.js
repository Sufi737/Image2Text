import React from "react";
import axios from "axios";

class UploadButton extends React.Component {

    callUploadImageEndpoint = () => {
        let file = this.props.image
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
                this.props.setResponse(res)
            }
        )
    }

    render() {
        return <div>
            <input type="submit" value="Upload" onClick={this.callUploadImageEndpoint}/>
        </div>
    }
}

export default UploadButton;