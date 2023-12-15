"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Glider from "react-glider";


const Gallery = () => {
  const images = [
    { src: "/assest/trip/gallery1.webp", author: "@ali.vonlewinski" },
    { src: "/assest/trip/gallery1.webp", author: "@johndoe" },
    { src: "/assest/trip/gallery1.webp", author: "@janedoe" },
    { src: "/assest/trip/gallery1.webp", author: "@samsmith" },
    { src: "/assest/trip/gallery1.webp", author: "@emilyjones" },
    { src: "/assest/trip/gallery1.webp", author: "@robertb" },
    { src: "/assest/trip/gallery1.webp", author: "@samsmith" },
  ];
  const gliderRef = useRef(null);
  return (
    <div className="">
      <div className="brand-container ">
        <div className="flex flex-col gap-2 pb-10">
          <h1 className="text-center text-[40px]  font-bold text-black py-5">
            Customer Gallery
          </h1>
          <div className="relative gap-0 flex">
            <Glider
              className="glider-container"
              draggable
              hasDots={false}
              slidesToShow={5}
              scrollLock
              hasArrows={false}
              ref={gliderRef}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: "5",
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
                  <p className="absolute px-4 py-4 text-white text-[14px] font-normal bottom-0">
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

export default Gallery;
