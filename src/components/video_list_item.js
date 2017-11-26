import React from 'react';

const VideoListItem = ({video, onVideoSelect})=>{ 
    
    if (!video) return <div>Loading...</div>

    const videoId = video.id.videoId;
    const imageUrl = video.snippet.thumbnails.default.url;
    const {title} = video.snippet;

    return(
        <li onClick={()=>onVideoSelect(video)}>
            <div>
                <div>
                    <img 
                        src={imageUrl} 
                        alt="image of video"
                    />
                </div>
                <div>
                    <p>
                        Title: {title}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;