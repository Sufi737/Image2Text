import React from 'react';

class ContentHeader extends React.Component{
    
    render() {
        return <div id="content-header">
            <p>
                <b>Welcome to Image2Text</b><br/> Extract text, URLs and detect languages in an image. 
                Click <a href='how-to-use'>here</a> to find out more.
            </p>
        </div>
    }
    
}

export default ContentHeader;
