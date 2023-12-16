"use client";
import React, { useEffect, useState } from "react";

const Banner = () => {
   const [textIndex, setTextIndex] = useState(0);
   const texts = [" South Indian Tour Packages  ", " South Indian Tour Packages "];

   useEffect(() => {
     const typingEffect = setInterval(() => {
       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
     }, 2000);

     return () => clearInterval(typingEffect);
   }, [texts.length]);

  return (
    <div className="bgtour ">
      <div className="bg-[#FF5956BF]">
        <div className="brand-container  px-5 py-16 mt-[6rem]">
          <div className="flex flex-col gap-10 justify-center items-center py-5">
            <div>
              <h1 className="text-[35px] font-bold xl:text-[50px] lg:text-[45px] md:text-[40px] text-[#E8FF5B] text-center relative inline-block overflow-hidden px-5">
                Thailand Packages
              </h1>
              <p className="text-[20px] text-white leading-normal text-center font-medium">
                Your portal to extraordinary marvels around the globe
              </p>
            </div>
            <div>
              <button className="text-[#FF5956] font-medium bg-[#E8FF5B] px-5 py-2 rounded-full">
                12 Packages Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
