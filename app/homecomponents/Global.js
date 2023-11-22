"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Global = () => {
  const playerRef = useRef(null);

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Great Adventure of Global Tourism!",
    "Great Adventure of Global Tourism!",
  ];

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(typingEffect);
  }, [texts.length]);

  return (
    <div className="relative w-full">
      {/* Video container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          ref={playerRef}
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/RzVvThhjAKw?enablejsapi=1&autoplay=0&mute=1&loop=1&playlist=RzVvThhjAKw"
          title="Background Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full bg-[#FF5956BF]">
        <div className="brand-container px-5 py-16">
          <div className="flex flex-col justify-center items-center py-5">
            <Image
              src="/assest/video/Link.png"
              width={110}
              height={110}
              className="cursor-pointer"
              alt="imgs"
              onClick={playVideo}
            />
            {/* animation */}
            <div className="text-center px-5 py-5">
              <h1 className="xl:text-[48px] xl:w-full lg:w-full md:w-full w-[350px] md:text-[24px] lg:text-[38px] text-[20px]  font-bold text-[#E8FF5B] relative inline-block overflow-hidden px-5">
                <span className="typing-text block whitespace-nowrap overflow-hidden">
                  {texts[textIndex]}
                  <span className="cursor w-[1px] inline-block bg-orange-500 h-[1em] absolute top-0 animate-blink" />
                </span>
              </h1>
            </div>
            <p className="text-white text-[16px] px-5 text-center leading-normal font-medium">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
