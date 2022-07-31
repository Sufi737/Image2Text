import React from "react";

class ShowUrls extends React.Component {
    renderRow = (url) => {
        return <tr>
            <td><a href={url} target="_blank">{url}</a></td>
        </tr>
    }

    render() {
        let urlList = this.props.urlList;
        console.log(this.props.urlList)
        if (urlList.length > 0) {
            return <div>
                <p className="response-header">URLs in image</p>
                <table id="url-table" border="1px solid black">
                    <tbody>{this.props.urlList.map(this.renderRow)}</tbody>
                </table>
            </div> 
        }
    }
}

export default ShowUrls;