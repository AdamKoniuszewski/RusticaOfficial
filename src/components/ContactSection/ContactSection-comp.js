import React from 'react';
import './ContactSection-style.scss';
import CustomInput from "../CustomInput/CustomInput-comp"
import InfoButton from '../InfoButton/InfoButton-comp';

import {ReactComponent as IconInstagram} from "../../images/svgs/instagram.svg";
import {ReactComponent as IconFacebook} from "../../images/svgs/facebook.svg";
import {ReactComponent as IconYoutube} from "../../images/svgs/youtube.svg";


const ContactSection = () => {

    console.log(IconYoutube);
    return (
        <div className="ContactSection">
            <h2 style={{color:"white", marginBottom:"10vh"}}>Did we get to know eachother a bit? <br/> Now it's your turn!</h2>
            <div className="ContactContainer">
                <div className="ContactInfo">
                    <h2>Rustica Management</h2>
                    <h3>email@email.com</h3>
                    <h3>+48 222 222 222</h3>
                </div>
                <div className="ContactForm">
                    <form>
                        <CustomInput name="name" type="text" placeholder="name" required/>
                        <CustomInput name="email" type="email" placeholder="email" required/>
                        <textarea name="message" placeholder="your message"></textarea>
                        <InfoButton>Submit</InfoButton>
                    </form>

                    <div className="ContactSMedia">
                        <h3>Follow us at:</h3>
                        <div className="MediaIcons">
                            
                            <IconFacebook fill="green" style={{marginRight: "10px"}} width="30px"/>
                            <IconInstagram style={{marginRight: "10px"}} width="30px"/>
                            <IconYoutube style={{marginRight: "10px"}} width="30px"/>
                        </div>
                    </div>
                </div>
            </div>


            
            <h3>Terms and Privacy policy</h3>
        </div>
    )
};

export default ContactSection;