import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return <VideoListItem 
        onSelectedVideo={props.onSelectedVideo}
        key={video.etag} 
        video={video} />
    });
    return (
        <div>
            <ul className="list-group col-md-4"> 
                {videoItem}
            </ul>
        </div>
    );
}

export default VideoList;