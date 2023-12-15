"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";


const Triumph = () => {
  const ImageData = [
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
    { src: "/assest/tour/img1.png", alt: "Image 2", username: "@another.user" },
  ];

  return (
    <div className="bg-[#F96768]">
      <div className=" py-10">
        <div className="flex flex-col gap-2 py-10">
          <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-between px-3 py-5 ">
            <h1 className="xl:text-[40px] lg:text-[35px] md:text-[24px] text-[18px] text-white">
              #Truimph Holidays
            </h1>
            <div className="flex items-center gap-3">
              <p className="text-[white] text-[18px]">
                Follow Triumph Holidays :
              </p>
              <p className="text-[white]">
                <FaFacebook size={24} />
              </p>
              <p className="text-[white]">
                <FaInstagram size={24} />
              </p>
              <p className="text-[white]">
                <FaTwitter size={24} />
              </p>
              <p className="text-[white]">
                <FaYoutube size={24} />
              </p>
              <p className="text-[white]">
                <FaLink size={24} />
              </p>
            </div>
          </div>
          {/* img container */}
          <div className="flex ss overflow-x-auto">
            {ImageData.map((imageData, index) => (
              <div className="relative flex-shrink-0" key={index}>
                <div className="w-350 h-300 overflow-x-hidden">
                  <Image
                    src={imageData.src}
                    width={350}
                    height={300}
                    className=""
                    alt={imageData.alt}
                  />
                </div>
                <p className="absolute bottom-3 left-3 text-white">
                  {imageData.username}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triumph;
