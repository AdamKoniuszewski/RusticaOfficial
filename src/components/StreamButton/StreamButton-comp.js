import React from "react";
import "./StreamButton-style.scss";


const StreamButton = ({name, url}) => {
    return (
        <div className="StreamButton">
            <h1>{name}</h1>
            <div className="ConnectToStream">Listen</div>
        </div>
    )
};

export default StreamButton;