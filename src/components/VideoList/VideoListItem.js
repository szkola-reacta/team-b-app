import React from 'react';

import { VideoTitle, VideoDescription, VideoThumb } from '../Video'

const VideoListItem = ( {video, maxWidth } ) => {
    const { description, title, video_url } = video
    const styles = {
        maxWidth: maxWidth+'px',
        padding: 10,
    }
    return (
        <div style={styles}>
            <VideoTitle>{title}</VideoTitle>
            <VideoThumb url={video_url} title={title} />
            <VideoDescription>{description}</VideoDescription>
        </div>
    )
}

export default VideoListItem;