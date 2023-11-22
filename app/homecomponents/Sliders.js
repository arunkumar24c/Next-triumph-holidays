"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Sliders = () => {
  const settings = {
    dots: false,

    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          initialSlide: 2,
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
    <div className="w-full px-5 py-10">
      

      <Slider {...settings}>
        <div className="shadow-md relative px-5 ">
          <div className="flex ">
            <div className="w-[95px] py-16 bg-[#FFF2F1]"></div>
            <div className="flex gap-2 py-16">
              <Image
                src={"/assest/Hero/img1.png"}
                width={80}
                height={80}
                className=""
                alt="img"
              />
              <div>
                <p>Mikky Matorn</p>
                <div className="flex gap-1">
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <CiStar />
                </div>
                <p>
                  Lorem ipsum dolor consecteturLorem ipsum dolor consectetur
                  Lorem ipsum dolor consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md relative px-5 ">
          <div className="flex ">
            <div className="w-[95px] py-16 bg-[#FFF2F1]"></div>
            <div className="flex gap-2 py-16">
              <Image
                src={"/assest/Hero/img1.png"}
                width={80}
                height={80}
                className=""
                alt="img"
              />
              <div>
                <p>Mikky Matorn</p>
                <div className="flex gap-1">
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <CiStar />
                </div>
                <p>
                  Lorem ipsum dolor consecteturLorem ipsum dolor consectetur
                  Lorem ipsum dolor consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md relative px-5 ">
          <div className="flex ">
            <div className="w-[95px] py-16 bg-[#FFF2F1]"></div>
            <div className="flex gap-2 py-16">
              <Image
                src={"/assest/Hero/img1.png"}
                width={80}
                height={80}
                className=""
                alt="img"
              />
              <div>
                <p>Mikky Matorn</p>
                <div className="flex gap-1">
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <CiStar />
                </div>
                <p>
                  Lorem ipsum dolor consecteturLorem ipsum dolor consectetur
                  Lorem ipsum dolor consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md relative px-5 ">
          <div className="flex ">
            <div className="w-[95px] py-16 bg-[#FFF2F1]"></div>
            <div className="flex gap-2 py-16">
              <Image
                src={"/assest/Hero/img1.png"}
                width={80}
                height={80}
                className=""
                alt="img"
              />
              <div>
                <p>Mikky Matorn</p>
                <div className="flex gap-1">
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <FaStar className="text-[yellow]" />
                  <CiStar />
                </div>
                <p>
                  Lorem ipsum dolor consecteturLorem ipsum dolor consectetur
                  Lorem ipsum dolor consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
