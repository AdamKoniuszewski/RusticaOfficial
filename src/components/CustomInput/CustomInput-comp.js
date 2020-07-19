import React from "react";
import './CustomInput-style.scss';


const CustomInput = ({name, type, placeholder}) => {
    return (
        <input name={name} type={type} placeholder={placeholder} required />    )
};


export default CustomInput;