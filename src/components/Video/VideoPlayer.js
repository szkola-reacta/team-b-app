import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ( {url} ) => {
    return (
        <ReactPlayer url={url} controls={true} width="100%" />
    )
}

export default VideoPlayer;



