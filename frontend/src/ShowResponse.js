import React from "react";

class ShowResponse extends React.Component {
    render() {
        const imageData = this.props.text
        if (imageData) {
            const text = imageData.data
            return <div>
                <textarea readOnly value={text}/>
            </div>
        }
    }
}

export default ShowResponse;