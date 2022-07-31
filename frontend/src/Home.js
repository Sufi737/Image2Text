import React from "react";
import DragDropFile from './ImageUpload.js';
import ShowImageText from './ShowImageText.js';
import Selector from './Selector';
import ShowUrls from './ShowUrls';
import DetectedLanguages from './DetectedLanguages';
import UploadButton from './UploadButton';
import ContentHeader from './ContentHeader';

class Home extends React.Component {

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
            "detect_language": false
        },
        showingResponse: false
      }
    }

    setResponse = (responseObject) => {
        this.setState({
            imageText: responseObject.data.text[0],
            urlList: responseObject.data.url,
            languages: responseObject.data.detected_languages.join(",")
        })
        if (responseObject.status) {
            this.setState({showingResponse: true})
        }
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
        if (this.state.showingResponse) {
          return <div id="main">
            <ShowImageText text={this.state.imageText}/>
            <ShowUrls urlList={this.state.urlList}/>
            <DetectedLanguages languages={this.state.languages}/>
            <button id="back-btn" onClick={() => {window.location.reload(false)}}>Back</button>
          </div>
        } else {
            return (
              <div id="main">
                  <ContentHeader />
                  <div id="image-upload">
                    <DragDropFile  setImage={this.setImage}/>
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
              </div>
            );
        }
        
    }
}

export default Home;