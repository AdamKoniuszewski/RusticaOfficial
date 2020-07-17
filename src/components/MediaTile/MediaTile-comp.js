import React from 'react';
import "./MediaTile-style.scss";
import YoutubeThumbnail from "../YoutubeThumbnail/YoutubeThumbnail-comp";

const MediaTile = ({songName, album}) => {
    return (
        <div className="tileContainer">
        <YoutubeThumbnail />
        <h2 className="SongTitle">SongTitle</h2>
        <h4 className="AlbumTitle">Album</h4>
        
            
        </div>
    )
};


export default MediaTile;