import React from "react";

class DetectedLanguages extends React.Component {
    render() {
        if (this.props.languages) {
            return <div><p>The image seems to contain the following language(s): {this.props.languages}</p></div>
        }
    }
}

export default DetectedLanguages;