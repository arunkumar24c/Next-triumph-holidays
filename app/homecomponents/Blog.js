"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import "glider-js/glider.min.css";
import Link from "next/link";

const testimonialData = [
  {
    id: 1,
    img: "",
    names: "Weekend Tour",
    cities:
      " We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignation who are so beguiled and demoralized by the pleasure of theWe denounce with brand d",
    tour: "140+ Tour place",
  },
  {
    id: 2,
    names: "Garmany",
    cities: " 8 cites",
    tour: "140+ Tour place",
  },
  {
    id: 3,
    names: "Garmany",
    cities: " 8 cites",
    tour: "140+ Tour place",
  },
  {
    id: 4,
    names: "Garmany",
    cities: " 8 cites",
    tour: "140+ Tour place",
  },
  {
    id: 5,
    names: "Garmany",
    cities: " 8 cites",
    tour: "140+ Tour place",
  },
];

const Blog = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div>
      <h3 className="text-center text-[14px] font-medium">Take a Look</h3>
      <h1 className="text-center text-[40px]">Our Blogs</h1>
      <div className=" container mx-auto mb-5 ">
        <Glider
          className="glider-container"
          draggable
          hasDots={false}
          slidesToShow={1}
          scrollLock
          hasArrows={false}
          ref={gliderRef}
          responsive={[
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: "3",
                slidesToScroll: "auto",
                itemWidth: 150,
                duration: 0.25,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: "3",
                slidesToScroll: "auto",
                itemWidth: 150,
                duration: 0.25,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: "2",
                slidesToScroll: "auto",
                itemWidth: 150,
                duration: 0.25,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: "1",
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
          {testimonialData.map((testimonial) => (
            <div className="mx-3" key={testimonial.id}>
              <PopularDestinationCard {...testimonial} />
            </div>
          ))}
        </Glider>
        <div className="flex justify-center py-5 ">
          <Link href="/Tour">
            <button className="bg-[#FF5956] text-[white] px-8 py-2 ">
              Explore all
            </button>
          </Link>
        </div>
        <div className="glider-arrows flex items-center justify-center gap-3 relative">
          <button
            className="glider-arrow border xl:absolute -top-[22rem] -left-[40px] hover:bg-[#FF5956] hover:text-white bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="glider-arrow border xl:absolute -top-[22rem] -right-[35px] hover:bg-[#FF5956] hover:text-white bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({}) => {
  return (
    <div className="brand-container py-5  ">
      <div className="flex flex-col gap-3 shadow-md bg-white">
        {/* left */}
        <div className="">
          <Image
            src="/assest/blog/img1.png"
            width={374}
            height={225}
            className="cursor-pointer w-full h-auto  "
            alt="imgs"
          />
          <div className=" bg-[#FF5956BF]">
            <p className="text-white text-center py-3">Explore Myself</p>
          </div>
        </div>
        {/* right */}
        <div>
          <p className="text-[#4B4B4B] px-1">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the We
            denounce with righteous indignation who are so beguiled and
            demoralized by the pleasure of the We denounce with brand d
          </p>
          <div className="bg-[#FFF2F1] flex justify-end">
            <Link href="/Blogs">
              <p className=" py-3 px-3 flex text-[#F96768] items-center gap-1">
                View blog <IoIosArrowForward className="text-[#F96768]" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
