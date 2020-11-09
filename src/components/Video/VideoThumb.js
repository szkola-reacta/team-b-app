import React from 'react';
import getVideoId from 'get-video-id';

const VideoThumb = ( {url, title} ) => {

    const imgSrc = getImgSrc(getVideoId(url));

    return (
        <div className="video-thumb">
            <img src={imgSrc} alt={title} />
        </div>
    )

}

const getImgSrc = (video) => {
    switch (video.service) {
        case 'youtube':
            return `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
        // case 'vimeo':   <- in the future we can add methods for other video services
        default: 
            return `${window.location.origin}/video-placeholder.png`;
    }
}

export default VideoThumb;