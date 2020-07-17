import React from 'react';
import './infoButton-style.scss';
import {Link} from "react-router-dom";



const InfoButton = ({children}) => {
    return (
        <div className="infoButton">
            <Link to="/">{children}</Link>
        </div>
    )
};

export default InfoButton;