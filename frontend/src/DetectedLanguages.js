import React from "react";
import { Navigate } from "react-router-dom";

class DetectedLanguages extends React.Component {
    render() {
        if (this.props.languages) {
            return <div id="language-text">
                <p>
                    <b>The image seems to contain the following language(s):</b> {this.props.languages}
                </p>
                <button id="back-btn" onClick={() => {window.location.reload(false)}}>Back</button>
            </div>
        }
    }
}

export default DetectedLanguages;