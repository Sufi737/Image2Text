import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './Home';
import HowToUse from './HowToUse';
import AboutUs from './AboutUs';

class App extends React.Component{

    render() {
        return <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/how-to-use' element={<HowToUse />} />
              <Route exact path='/about-us' element={<AboutUs />} />
          </Routes>
        </Router>
    }
    
}

export default App;
