import React from "react";

class ImageUpload extends React.Component {

    handleFile = (e) => {
        let file = e.target.files[0]
        this.props.setImage(file)
    }

    render() {
      return <div id="image-upload-wrapper">
            <label id="image-upload-label">Upload Image</label>
            <input type="file" id="image" name="image" onChange={(e) => this.handleFile(e)} />
        </div>
    }
}

export default ImageUpload;