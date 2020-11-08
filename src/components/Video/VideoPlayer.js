import React from 'react'
import ReactPlayer from 'react-player'

import './Video.css';

const VideoPlayer = ( {url} ) => {

    return (
        <ReactPlayer
            url={url}
            controls={true}
            width="100%"
            height="56.25"
            className="video-player"
        />
    )
}

export default VideoPlayer;



