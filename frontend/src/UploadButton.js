import React from "react";
import axios from "axios";

class UploadButton extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            invalidInput: false
        }
    }

    username = 'image-extract-info-user';
    password = 'KA#$DlAQw^7d2eFOMetdd';

    fetchJwtToken = async () => {
        const {data} = await axios.post(
            'http://localhost:8080/authenticate',
            {
                username: this.username,
                password: this.password
            }
        );
        return data.jwt;
    }

    processImage = async () => {
        let jwtToken = await this.fetchJwtToken();
        let file = this.props.image
        let formData = new FormData();
        formData.append('image', file)
        formData.append('selectedOptions', JSON.stringify(this.props.selectedOptions))
        console.log(this.props.selectedOptions)
        const config = {
            headers: {
                "Authorization": "Bearer "+jwtToken
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
        if ((this.props.image !== null) && 
            (this.props.selectedOptions.url == true || 
                this.props.selectedOptions.text == true ||
                this.props.selectedOptions.detect_language == true    
            )) {
            return <div id="upload-btn-wrapper">
                <div id="upload-btn">
                    <input type="submit" value="Upload" onClick={this.processImage}/>
                </div>
            </div>    
        }
        
    }
}

export default UploadButton;