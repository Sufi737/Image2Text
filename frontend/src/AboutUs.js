import React from 'react';
import './AboutUs.css';

class Aboutus extends React.Component{

    render() {
        return <div id="main">
            <div id="header-text"><b>About Image2Text</b></div>
            <br/>
            <div id="about-text">
                <p>
                    Image2Text provides you the convenience to extract text, URLs and detect languages in an image.
                </p>
                <br/>
                <p>
                    It makes use of Free OCR API to extract text data from an image. You may learn more about tesseract engine <a href="https://ocr.space/OCRAPI">here</a>
                </p>
                <br/>
                <p>
                    To detect languages, <a href="https://detectlanguage.com/">Detect Language API</a> is used which takes in text data from your image and provides you a list of languages.
                </p>
                <br/>
                <p>
                    Images uploaded are not stored on the server and neither is image data being used for any purposes.
                </p>
            </div>
        </div>
    }
}

export default Aboutus;