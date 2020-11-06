import React from 'react';
import { Video } from '../Video';
import { movies } from '../../api/db.json';
import './VideoList.css';

function VideoList() {
	return(
		<div className="video-list-container">
			{ movies.map( element => {
				return(
					<div key={element.id} className="video-list-element">
						<Video maxWidth="600" video={ element }/>
					</div>
				);
			})}
		</div>
	)
}

export default VideoList;