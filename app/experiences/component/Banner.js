"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Banner = () => {
  const settings = {
    dots: false,

    arrows: false,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
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
    <div className="w-full mt-[5.3rem]">
      <Slider {...settings}>
        <div className="w-full">
          <Image
            src={"/assest/tour/tour.png"}
            width={1200}
            height={500}
            alt="Banner 1"
            className="w-full h-[400px]"
          />
        </div>
        <div className="w-full">
          <Image
            src={"/assest/tour/tour.png"}
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

export default Banner;
