"use client";
import { Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-10">
      <video
        ref={videoRef}
        className="w-full rounded-xl"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        muted
        loop
        controls={false}
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent flex items-end justify-center pointer-events-none rounded-b-xl">
        <p className="text-center text-[#71717A] text-[18px] font-medium max-w-xl px-4 mb-5">
          This is a sample description text that appears in the gradient overlay
          area.
        </p>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="cursor-pointer transition rounded-full bg-white duration-300 text-white p-6 text-3xl">
          {isPlaying ? (
            <Pause className="text-[#302CFF] " />
          ) : (
            <Play className="text-[#302CFF] " />
          )}
        </div>
      </button>
    </div>
  );
};

export default Video;
