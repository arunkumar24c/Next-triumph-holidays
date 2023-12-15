"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGalleryLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="bgtour ">
      <div className="bg-[#FF5956BF]">
        <div className="brand-container  px-5 py-10 mt-[6rem]">
          <div className="flex flex-col gap-10 justify-center items-center py-16">
            <Image
              src="/assest/navbar/logo1.png"
              width={110}
              height={110}
              className="cursor-pointer"
              alt="imgs"
            />
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-white font-bold text-[25px] text-center">
                Exploring our
              </p>
              <h1 className="text-[35px] font-bold xl:text-[50px] lg:text-[45px] md:text-[40px] text-[#E8FF5B] text-center">
                Weekend Tour
              </h1>
              <p className="text-[20px] text-white leading-normal text-center font-medium">
                Discover an enhanced travel experience at this location. Immerse
                yourself in a superior journey with us.
              </p>
              <Link href="/gallery">
                <button className="flex gap-2 items-center bg-[#e8ff5b] text-[18px] text-[#FF5956] py-3 px-5">
                  <span>
                    <RiGalleryLine size={25} />
                  </span>
                  Explore Trip Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
