import React from 'react';

import { VideoTitle, VideoDescription, VideoPlayer, Video404 } from './';

const Video = ( {maxWidth, video} ) => {

    const styles = {
        maxWidth: `${maxWidth}px`,
        padding: 20,
        background: '#eee',
    }

    if (typeof video === 'undefined') {
        return (
            <div style={styles}>
                <Video404 />
            </div>
        )
    }

    const { id, title, description, video_url } = video;

    return (
        <div style={styles} id={id}>

            <VideoTitle>{title}</VideoTitle>
            <VideoPlayer 
                url={video_url}
            />
            <VideoDescription>{description}</VideoDescription>
        </div>
    );
}

export default Video;