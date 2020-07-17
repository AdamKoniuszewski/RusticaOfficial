import React from "react";
import "./LandingSection-style.scss";
import LandingBody from "../LandingBody/LandingBody-comp";
import Header from "../Header/Header-comp";
import bgPhoto from "../../images/bg-photos/Backgrounds/1.jpg"
/*
import * as imageBundle from "../../images/bg-photos/Backgrounds/index";
const images=[
    imageBundle.bg1,
    imageBundle.bg2,
    imageBundle.bg3,
    imageBundle.bg4,
]
var x = 0;
*/




class LandingSection extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            imgPath: bgPhoto,
        }
    }


    componentDidMount() {
       /* this.interval = setInterval(()=>{
            x>=images.length-1? x=0:x++;            
            this.setState({imgPath: images[x]});
            console.log(x + " and path " +this.state.imgPath)},
            6000); */
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
    


    render() {
        return (
            <div className="Landing_Container" style={{backgroundImage: "url(" +this.state.imgPath+")" }}>
                <Header />
                <LandingBody />
            </div>
        )
    }
    
};


export default LandingSection;