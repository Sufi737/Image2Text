import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload.js';
import ShowImageText from './ShowImageText.js';
import Selector from './Selector';
import ShowUrls from './ShowUrls';
import DetectedLanguages from './DetectedLanguages';

class App extends React.Component{

    constructor (props) {
      super (props)
      this.setResponse = this.setResponse.bind(this)
      this.state = {
        imageText: null,
        urlList: null,
        languages: null,
        selectedValues: {
            "text": false,
            "url": false,
            "translate_to_eng": false,
            "detect_langauge": false
        }
      }
    }

    setResponse = (responseObject) => {
        this.setState({
            imageText: responseObject.data.text[0],
            urlList: responseObject.data.url,
            languages: responseObject.data.detected_languages.join(",")
        })
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
                <ShowImageText text={this.state.imageText}/>
                <ShowUrls urlList={this.state.urlList}/>
                <DetectedLanguages languages={this.state.languages}/>
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
                  type="detect_language" 
                  label={"Identify Language(s)"} 
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
