"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="bgtour ">
      <div className="bg-[#FF5956BF]">
        <div className="brand-container  px-5 py-16 mt-[6rem]">
          <div className="flex flex-col gap-10 justify-center items-center py-36">
            <div>
              <h1 className="text-[35px] font-bold xl:text-[50px] lg:text-[45px] md:text-[40px] text-[#E8FF5B] text-center">
                Hilarious Himalayas
              </h1>
              <p className="text-[20px] text-white leading-normal text-center font-medium">
                Discover an enhanced travel experience at this location. Immerse
                yourself in a superior journey with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
