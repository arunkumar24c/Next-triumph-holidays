"use client"
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { FaStar } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Link from "next/link";


const tripsData = [
  {
    imgSrc: "/assest/trip/img1.png",
    title: "Amazing Australia",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  
  
 
];

const Package = () => {
    const gliderRef = useRef(null);

    const handleGliderNext = useCallback(() => {
      gliderRef.current.scrollItem("next");
    }, [gliderRef]);

    const handleGliderPrev = useCallback(() => {
      gliderRef.current.scrollItem("prev");
    }, [gliderRef]);


  return (
    <div className="brand-container py-5">
      <div className="flex flex-col gap-6 justify-center items-center py-10">
        <div>
          <h2 className="text-[14px] text-center font-medium">Take a Look</h2>
          <h1 className="text-[40px] text-center font-bold text-black">
            Related Experiences
          </h1>
        </div>
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
            {tripsData.map((trip, index) => (
              <div className="mx-3" key={index}>
                <div key={index} className="flex flex-col shadow-md gap-4">
                  <Image
                    src={trip.imgSrc}
                    width={400}
                    height={250}
                    className="w-full"
                    alt="imgs"
                  />
                  <div className="px-4 py-5">
                    <div className="flex justify-between gap-2">
                      <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                        {trip.title}
                      </h1>
                    </div>
                    <p className="text-[14px] py-1 font-normal">
                      <span className="text-[#FF5956] text-[14px] font-medium">
                        {trip.duration}
                      </span>{" "}
                    </p>
                    <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] pb-2">
                      {trip.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="flex gap-1 items-center">
                        <span>
                          <FaStar size={25} className="text-[#F1C40F]" />
                        </span>
                        4.6
                      </p>
                      <p className="font-light text-[#6C6C6C] text-[14px]">
                        ( 96 Reviews)
                      </p>
                    </div>
                    <div className="flex justify-center py-2">
                      <Link href="/package">
                        <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Glider>
          <div className="glider-arrows flex items-center justify-center gap-3 relative">
            <button
              className="glider-arrow border xl:absolute -top-[17rem] -left-[40px]  hover:bg-[#FF5956] hover:text-white bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
              onClick={handleGliderPrev}
            >
              <GoArrowLeft size={32} />
            </button>
            <button
              className="glider-arrow border xl:absolute -top-[17rem] -right-[35px]  hover:bg-[#FF5956] hover:text-white bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
              onClick={handleGliderNext}
            >
              <GoArrowRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
