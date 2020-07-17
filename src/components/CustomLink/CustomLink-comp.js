import React from 'react';
import "./CustomLink-style.scss";

import {Link} from "react-router-dom";


const CustomLink = ({name}) => {
    return (
        <div className="CustomLink">
            <Link to="/"> {name.toUpperCase()} </Link>
        </div>
    )
}



export default CustomLink;