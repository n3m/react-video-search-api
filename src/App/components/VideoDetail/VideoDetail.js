import React from 'react';
import './style.css';

const VideoDetail = props => {
  const desc = props.desc;
  return (
    <React.Fragment>
      <div className="video-feed-div">
        <div className="video">video</div>
        <div className="description">{desc}</div>
      </div>
    </React.Fragment>
  );
};

export default VideoDetail;
