import React from "react";

class ShowUrls extends React.Component {
    renderRow = (url) => {
        return <tr>
            <td><a href={url} target="_blank">{url}</a></td>
        </tr>
    }

    render() {
        let urlList = this.props.urlList;
        if (urlList) {
            console.log("showing table");
            return <table border="1px solid black">
                {this.props.urlList.map(this.renderRow)}
            </table>
        }
    }
}

export default ShowUrls;