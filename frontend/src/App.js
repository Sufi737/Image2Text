import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './Home';

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
            "detect_language": false
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
        return <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
    }
    
}

export default App;
