import React from 'react';


export default function VideoLink(props) {
    const {src} = props;

  return (
    // Fade in down animation

    <div className="ratio ratio-16x9 shadow-lg">
      <iframe
        src={src}
        title="YouTube video"
        animation="fade-in-down"
        allowFullScreen
      ></iframe>
    </div>

  );
}
