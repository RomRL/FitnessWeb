import React from "react";
import VideoLink from "./VideoLink";
//This component is used to create a video player from ReactPlayer 
export default function LoadLinks(props) {
  const { video_urls } = props;
  return (
    <div className="row shadow-lg">
      {/* For each video */}
      {video_urls.map((url, index) => (
        <div key={index} className="col">
          <div className="card h-150">
            <VideoLink src={url} />
            <div className="card-body">
              <h5 className="card-title">Video {index + 1}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
