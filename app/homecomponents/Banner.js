"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


const Sliders = () => {
  const settings = {
    dots: false,

    arrows: false,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="w-full">
          <Image
            src={"/assest/trip/trip.avif"}
            width={1200}
            height={500}
            alt="Banner 1"
            className="w-full h-[400px]"
          />
        </div>
        <div className="w-full">
          <Image
            src={"/assest/trip/trip1.avif"}
            width={1200}
            height={500}
            alt="Banner 2"
            className="w-full h-[400px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
