"use client"
import React, { useEffect, useState } from 'react'

const Hero = () => {
   const [textIndex, setTextIndex] = useState(0);
   const texts = [
     " Explore World Tour  ",
     " Explore World Tour ",
   ];

   useEffect(() => {
     const typingEffect = setInterval(() => {
       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
     }, 2000);

     return () => clearInterval(typingEffect);
   }, [texts.length]);

const [selectedButton, setSelectedButton] = useState("international");

  const handleButtonClick = (type) => {
    setSelectedButton(type);}

  return (
    <div className="bgtour ">
      <div className="bg-[#FF5956BF]">
        <div className="brand-container  px-5 py-16 mt-[6rem]">
          <div className="flex flex-col gap-10 justify-center items-center py-5">
            <div>
             
              <h1 className="text-[35px] font-bold xl:text-[50px] lg:text-[45px] md:text-[40px] text-[#E8FF5B] relative inline-block overflow-hidden px-5">
                <span className="typing-text block whitespace-nowrap overflow-hidden px-2">
                  {texts[textIndex]}
                  <span className="cursor w-[1px] inline-block bg-orange-500 h-[1em] absolute top-0 animate-blink" />
                </span>
              </h1>
              <p className="text-[20px] text-white leading-normal text-center font-medium">
                Your portal to extraordinary marvels around the globe.
              </p>
            </div>
            <div>
              <button className="text-[#FF5956] font-medium bg-[#E8FF5B] px-5 py-2 rounded-full">
                102 Tours
              </button>
            </div>
            <div>
              <div className="flex px-1 py-1 bg-white rounded-full">
                {/* select button */}
                <p
                  className={`${
                    selectedButton === "international"
                      ? "bg-[#FF5956] text-white"
                      : "bg-white text-[#FF5956]"
                  } px-5 py-2 rounded-full cursor-pointer`}
                  onClick={() => handleButtonClick("international")}
                >
                  International Tours
                </p>
                {/* non select button */}
                <p
                  className={`${
                    selectedButton === "domestic"
                      ? "bg-[#FF5956] text-white"
                      : "bg-white text-[#FF5956]"
                  } px-5 py-2 rounded-full cursor-pointer`}
                  onClick={() => handleButtonClick("domestic")}
                >
                  Domestic Tours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero