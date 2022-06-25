import React from "react";
import './Selector.css';

class Selector extends React.Component {

    handleSelectChange = (e) => {
        this.props.setSelectedValue(this.props.type, e.target.checked)
    }

    render() {
        return <div>
            <label>{this.props.label}</label>
            <label className="switch">
                <input type="checkbox" onChange={(e) => this.handleSelectChange(e)}/>
                <span className="slider round"></span>
            </label>
        </div> 
    }
}

export default Selector;