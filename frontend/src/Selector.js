import React from "react";

class Selector extends React.Component {

    handleSelectChange = (e) => {
        this.props.setSelectedValue(this.props.type, e.target.checked)
    }

    render() {
        return <div>
            <input type="checkbox" value="Extract text" onChange={(e) => this.handleSelectChange(e)}/>
            <label>{this.props.label}</label>
        </div>
    }
}

export default Selector;