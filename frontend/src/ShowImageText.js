import React from "react";

class ShowImageText extends React.Component {
    render() {
        const imageText = this.props.text
        if (imageText) {
            return <div>
                <textarea readOnly value={imageText}/>
            </div>
        }
    }
}

export default ShowImageText;