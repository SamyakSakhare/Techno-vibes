import React, { useRef, useState, useEffect } from "react";

function Test() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoElement.pause();
        setIsPlaying(false);
      } else {
        const rect = videoElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          if (isPlaying) {
            videoElement.play().catch(error => console.log("Playback prevented:", error));
          }
        }
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isPlaying) {
          videoElement.play().catch(error => console.log("Playback prevented:", error));
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(videoElement);

    document.addEventListener("visibilitychange", handleVisibilityChange);

   
    handleVisibilityChange();

    return () => {
      observer.unobserve(videoElement);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = false;
      videoElement.play().catch(error => console.log("Playback prevented:", error));
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        muted={true} // Start with muted video
        autoPlay
        loop
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/TechVideo (1).mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl"
        >
          Unmute & Play
        </button>
      )}
    </div>
  );
}

export default Test;
