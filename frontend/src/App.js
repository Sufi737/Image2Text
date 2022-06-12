import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload.js';
import ShowResponse from './ShowResponse.js';

class App extends React.Component{

    constructor (props) {
      super (props)
      this.setResponse = this.setResponse.bind(this)
      this.state = {imageText: null}
    }
    
    setResponse = (responseText) => {
        this.setState({imageText: responseText})
    }
    
    render() {
        const imageText = this.state.imageText
        return (
            <div className="App">
                <ImageUpload setResponse={this.setResponse}/>
                <ShowResponse text={this.state.imageText}/>
            </div>
        );
    }
    
}

export default App;
