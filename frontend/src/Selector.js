import React from "react";

class Selector extends React.Component {

    handleSelectChange = (e) => {
        this.props.setSelectedValue(this.props.type, e.target.checked)
    }

    render() {
        return <div className="selector">
            <label>{this.props.label}</label>
            <div className="switch_box box_1">
                <input type="checkbox" className="switch_1" onChange={(e) => this.handleSelectChange(e)}/>
                <span className="slider round"></span>
            </div>
        </div> 
    }
}

export default Selector;