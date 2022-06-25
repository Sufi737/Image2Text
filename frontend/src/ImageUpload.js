import React from "react";
import './ImageUpload.css';

class ImageUpload extends React.Component {

    handleFile = (e) => {
        let file = e.target.files[0]
        this.props.setImage(file)
    }

    render() {
      return <div className="image-upload">
            <label>Upload Image</label>
            <input type="file" id="image" name="image" onChange={(e) => this.handleFile(e)} />
        </div>
    }
}

export default ImageUpload;