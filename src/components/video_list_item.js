import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
        return (
            <li onClick={() => {onSelectedVideo(video);}} className="list-group-item list-click"> 
                <div className="vide-list media">
                    <div className="media-left"> 
                        <img className="media-object" src={imgUrl} alt="default-alt"/>
                    </div>

                    <div className="media-body"> 
                        <div className="media-heading"> {video.snippet.title} </div>
                    </div>
                </div>
            </li>
        );
    }



export default VideoListItem;