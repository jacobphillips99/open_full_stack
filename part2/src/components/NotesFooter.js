import React from "react";

const Footer = () => {
    const footerStyle = {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 16
    }
    console.log("footer")
    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Jacob Phillips, Full Stack Open</em>
        </div>
    )
}

export default Footer