import React from 'react';
import './HowToUse.css';

class HowToUse extends React.Component{

    render() {
        return <div id="main">
            <div id="header-text"><b>HOW TO EXTRACT DATA FROM AN IMAGE USING IMAGE2TEXT</b></div>
            <br/>
            <b className='step-text'>Step 1: Upload the image</b>
            <p className='step-text'>Using the image uploader provided, upload the image for which you want to extract data from.
                You may click on 'Upload Image' or drag and drop the image.
            </p>
            <img id="info-img1" src="upload_image.png" />
            <br/>
            <b className='step-text'>Step 2: Select the options</b>
            <p className='step-text'>Once the image is uploaded, select at least one of the options provided. Once you select any one option, you should see an upload button below.
            </p>
            <img id="info-img2" src="selectors.png" />
            <br/>
            <b className='step-text'>Step 3: Click the upload button</b>
            <p className='step-text'>Click the upload button and wait for the results!</p>
        </div>
    }
}

export default HowToUse;