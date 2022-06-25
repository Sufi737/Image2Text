import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload.js';
import ShowImageText from './ShowImageText.js';
import Selector from './Selector';
import ShowUrls from './ShowUrls';
import DetectedLanguages from './DetectedLanguages';
import UploadButton from './UploadButton';

class App extends React.Component{

    constructor (props) {
      super (props)
      this.setResponse = this.setResponse.bind(this)
      this.state = {
        imageText: null,
        urlList: null,
        languages: null,
        image: null,
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

    setImage = (uploadedImage) => {
      this.setState({image: uploadedImage})
    }
    
    render() {
        const imageText = this.state.imageText
        return (
            <div className="App">
                <ImageUpload  setImage={this.setImage}/>
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
                <UploadButton 
                  image={this.state.image} 
                  selectedOptions={this.state.selectedValues} 
                  setResponse={this.setResponse}
                />
            </div>
        );
    }
    
}

export default App;
