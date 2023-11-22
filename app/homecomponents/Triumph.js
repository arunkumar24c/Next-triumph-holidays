"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Glider from "react-glider";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const Triumph = () => {
  const images = [
    { src: "/assest/blog/img1.png", author: "@ali.vonlewinski" },
    { src: "/assest/blog/img2.png", author: "@johndoe" },
    { src: "/assest/blog/img3.png", author: "@janedoe" },
    { src: "/assest/blog/img1.png", author: "@samsmith" },
    { src: "/assest/blog/img2.png", author: "@emilyjones" },
    { src: "/assest/blog/img1.png", author: "@robertb" },
    { src: "/assest/blog/img1.png", author: "@samsmith" },
  ];
  const gliderRef = useRef(null);
  return (
    <div className="bg-[#F96768]">
      <div className=" py-10">
        <div className="flex flex-col gap-2 py-10">
          <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-between px-3 py-5 ">
            <h1 className="xl:text-[40px] lg:text-[35px] md:text-[24px] text-[18px] text-white">
              #Truimp Holidays
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
          <div className="relative gap-0 flex">
            <Glider
              className="glider-container"
              draggable
              hasDots={false}
              slidesToShow={8}
              scrollLock
              hasArrows={false}
              ref={gliderRef}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: "6",
                    slidesToScroll: "auto",
                    itemWidth: 150,
                    duration: 0.25,
                  },
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: "4",
                    slidesToScroll: "auto",
                    itemWidth: 150,
                    duration: 0.25,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: "2",
                    slidesToScroll: "auto",
                    itemWidth: 150,
                    duration: 0.25,
                  },
                },
                {
                  breakpoint: 375,
                  settings: {
                    slidesToShow: "1",
                    slidesToScroll: "auto",
                    itemWidth: 150,
                    duration: 0.55,
                  },
                },
              ]}
            >
              {images.map((image, index) => (
                <div key={index} className="relative px-3 w-full">
                  <Image
                    src={image.src}
                    width={240}
                    height={300}
                    className="h-[300px] w-full"
                    alt={`img-${index}`}
                  />
                  <p className="absolute text-white text-[14px] font-normal bottom-0">
                    {image.author}
                  </p>
                </div>
              ))}
            </Glider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triumph;
