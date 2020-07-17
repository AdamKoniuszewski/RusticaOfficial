import React from "react";
import './MusicSection-style.scss';

import StreamButton from "../StreamButton/StreamButton-comp";

class MusicSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streams: [
                {
                    id:1,
                    name: "Spotify",
                    url: "/"
                },
                {
                    id:2,
                    name: "Youtube",
                    url: "/"
                },
                {
                    id:3,
                    name: "iTunes",
                    url: "/"
                },
                {
                    id:4,
                    name: "PlayMusic",
                    url: "/"
                },

            ]
        }
    }

    render() {
        return (
            <div className="SectionMusic">
                <div className="MusicWrapper">
                    <div className="AlbumCover"></div>
                    <div className="StreamList">
                    {this.state.streams.map(stream=> <StreamButton key={stream.id} url={stream.url} name={stream.name}/>)}
                    </div>
                </div>
            </div>
        )
    }
};

    


export default MusicSection;