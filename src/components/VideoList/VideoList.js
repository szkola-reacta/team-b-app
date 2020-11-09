import React from 'react';
import { VideoListItem } from './';
import { movies } from '../../api/db.json';
import './VideoList.css';

function VideoList() {
	return(
		<div className="video-list-container">
			{ movies.map( element => {
				return(
					<div key={element.id} className="video-list-element">
						<VideoListItem maxWidth="600" video={ element }/>
					</div>
				);
			})}
		</div>
	)
}

export default VideoList;