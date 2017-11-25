import React from 'react';

const VideoListItem = ({video})=>{ 
    const {snippet} = video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const {title} = video.snippet;

    console.log(snippet);

    return(
        <li>
            <div>
                <div>
                    <img src={imageUrl} alt="image of video"/>
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