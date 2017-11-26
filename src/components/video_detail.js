import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) return <div>Loading...</div>;

    const videoId = video.id.videoId;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    console.log("video: ", video);

    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="videoDetail col-10">

            <iframe className="video-detail-player" src={url} />

          <div className="details">
            <h3>{videoTitle}</h3>
            <p>{videoDescription}</p>
          </div>
      </div>
    );
    
};

export default VideoDetail;