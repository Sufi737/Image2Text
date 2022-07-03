import React from "react";
import axios from "axios";

class UploadButton extends React.Component {

    callUploadImageEndpoint = () => {
        let file = this.props.image
        let formData = new FormData();
        formData.append('image', file)
        formData.append('selectedOptions', JSON.stringify(this.props.selectedOptions))
        console.log(this.props.selectedOptions)
        const config = {
            headers: {
                "Origin": "http://localhost:3000",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbWFnZS1leHRyYWN0LWluZm8tdXNlciIsImV4cCI6MTY1Njg5ODAwNywiaWF0IjoxNjU2ODYyMDA3fQ.S-KF09ZqwURvbRucWerzX7PZOLlKUBKFzXzUkNRL6oU"
            }
        }
        axios.post(
            'http://localhost:8080/image/extract',
            formData,
            config
        ).then(
            (res) => {
                console.log(res);
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