import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload.js';
import ShowResponse from './ShowResponse.js';
import Selector from './Selector';

class App extends React.Component{

    constructor (props) {
      super (props)
      this.setResponse = this.setResponse.bind(this)
      this.state = {
        imageText: null,
        selectedValues: {
            "text": false,
            "url": false,
            "translate_to_eng": false
        }
      }
    }

    setResponse = (responseText) => {
        this.setState({imageText: responseText})
    }

    setSelectedValue = (type, value) => {
        let copySelectedValues = { ...this.state.selectedValues}
        copySelectedValues[type] = value
        this.setState({selectedValues: copySelectedValues})
    }
    
    render() {
        const imageText = this.state.imageText
        return (
            <div className="App">
                <ImageUpload selectedOptions={this.state.selectedValues} setResponse={this.setResponse}/>
                <ShowResponse text={this.state.imageText}/>
                <Selector type="text" 
                  label={"Extract Text"} 
                  setSelectedValue={this.setSelectedValue}
                />
                <Selector 
                  type="url" 
                  label={"Extract URL(s)"} 
                  setSelectedValue={this.setSelectedValue}
                />
                <Selector 
                  type="translate_to_eng" 
                  label={"Translate to English"} 
                  setSelectedValue={this.setSelectedValue}
                />
            </div>
        );
    }
    
}

export default App;
