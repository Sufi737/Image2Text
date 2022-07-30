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
            return <table border="1px solid black">
                <tbody>{this.props.urlList.map(this.renderRow)}</tbody>
            </table>
        }
    }
}

export default ShowUrls;