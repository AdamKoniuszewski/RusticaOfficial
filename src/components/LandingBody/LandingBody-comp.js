import React from 'react';
import './LandingBody-style.scss';
import MediaTile from "../MediaTile/MediaTile-comp";



class LandingBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            youtubeTiles: [{
                key: 1,
                songName: "Loreley",
                album: "nie stwierdzono"
            },
            {
                key: 2,
                songName: "Sera Was Never",
                album: "nie stwierdzono"
            },
            {
                key: 3,
                songName: "Unda",
                album: "nie stwierdzono"
            },
            {
                key: 4,
                songName: "Grosza daj Wiedźminowi",
                album: "nie stwierdzono"
            },
        
        ]
        };
    }

    render() {
        const tiles = this.state.youtubeTiles;
        return (
        <div className="container" >
            {this.state.youtubeTiles.map(tile=> <MediaTile key={tiles.key} songName={tiles.songName} album={tiles.album}/>)}
        </div>

    )}
        
    
};


export default LandingBody;