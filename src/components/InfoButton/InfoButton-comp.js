import React from 'react';
import './infoButton-style.scss';
import {Link} from "react-router-dom";



const InfoButton = () => {
    return (
        <div className="infoButton">
            <Link to="/">INFO</Link>
        </div>
    )
};

export default InfoButton;