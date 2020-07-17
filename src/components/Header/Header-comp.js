import React from 'react';
import './Header-style.scss';

//Components

import CustomLink from "../CustomLink/CustomLink-comp"

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            links:[{
                id:1,
                name:"rustica",
                url:"/rustica",
                
            },
            {
                id:2,
                name:"tour",
                url:"/tour",
                
            },
            {
                id:3,
                name:"about us",
                url:"/about",
                
            },
            {
                id:4,
                name:"media",
                url:"/media",
                
            },
            {
                id:5,
                name:"contact",
                url:"/contact",
                
            },
        
        ]
        }
    };

    render() {
        return (
            <div className="HeaderContainer">
                <div className="links"> 
                {this.state.links.map(link=> <CustomLink key={link.id} name={link.name} url={link.url}/>)}
                </div>
            </div>

          
        )
        

    }
        
};

export default Header;
