import React from "react";

class ShowImageText extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
          text: "Copy"
        }
    }

    changeText = () => {
        this.setState({text: "Copied!"})
    }

    render() {
        const imageText = this.props.text
        if (imageText) {
            return <div id="image-text">
                <p className="response-header">Image Text</p>
                <div>
                    <textarea readOnly value={imageText}/>
                </div>
                <div>
                    <button id="copy-btn"
                        onClick={() => 
                            {
                                navigator.clipboard.writeText(imageText)
                                this.changeText()
                            }
                        }
                    >
                        {this.state.text}
                    </button>
                </div>
            </div>
        }
    }
}

export default ShowImageText;