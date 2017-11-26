import React from 'react';
import VideoListItem from './video_list_item';

// in props we have onVideoSelect, which comes from App.js, we passed it in <VideoList onVideoSelected={selectedVideo=>this.setState({selectedVidoe})}>

const VideoList = (props) => {

    const videoItems = props.videos.map(video=>{
        return (
            <VideoListItem 
                video={video} 
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
            />
        );
    });

    return(
        <div className="col-2">
            <ul>
                {videoItems}            
            </ul>
        </div>
    );

}

export default VideoList;