import React from "react";

const VideoHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bgvid.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center text-white px-4">
      </div>

    </section>
  );
};

export default VideoHero;
