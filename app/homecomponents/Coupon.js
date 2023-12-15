"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import "../../public/assest/trip/img.jpg";

import "glider-js/glider.min.css";
import Link from "next/link";

const testimonialData = [
  {
    id: 1,
    names: "Germany",
    cities: " 8 cites",
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
    names: "Germany",
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

const Coupon = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="py-10">
      <h3 className="text-center text-[14px] pt-10">PLAN YOUR NEXT TRIP</h3>
      <h1 className="text-center py-1 text-[40px]">Coupon Packages</h1>
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
                slidesToShow: "4",
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
            <div className="px-2" key={testimonial.id}>
              
                {" "}
                <PopularDestinationCard {...testimonial} />
             
            </div>
          ))}
        </Glider>
        <div className="flex justify-center py-5 ">
          <Link href="/intertour">
            <button className="bg-[#FF5956] text-[white] px-8 py-2 ">
              Explore
            </button>
          </Link>
        </div>

        <div className="glider-arrows flex items-center justify-center gap-3 relative">
          <button
            className="glider-arrow border xl:absolute -top-[22rem] -left-[40px] bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="glider-arrow border xl:absolute  -top-[22rem] -right-[35px] bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({ names, cities, tour }) => {
  return (
    <div className="brand-container py-5  ">
      <div className="">
        <div
          className="w-[300px] h-[450px] rounded-md flex justify-center items-end py-5 px-5 "
          style={{
            backgroundImage: 'url("/assest/trip/img.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="text-white text-[18px]">{names}</h2>
            <div className="flex gap-3 ">
              <p className="text-white text-[12px]">{cities}</p>
              <p className="text-[#ffffff] font-light italic text-[12px]">
                {tour}
              </p>
            </div>
            {/* <button className="px-5 py-2 font-semibold text-[14px] text-white bg-[#FF5956] rounded-md">
              Book now !{" "}
            </button> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Coupon;
