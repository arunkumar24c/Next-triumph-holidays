"use client";
import React, {  useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";

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

const Attraction = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="py-10">
      <div className="flex justify-center  items-center ">
        <div className="max-w-md w-full">
          {/* 1 */}
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Destinations
          </label>
          <div className="relative my-5">
            <select
              id="countries"
              className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
              <FiChevronDown className="h-4 w-4" /> {/* React icon */}
            </div>
          </div>
          {/* 2 */}
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <div className="relative">
            <select
              id="countries"
              className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
              <FiChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center py-1 pt-10 text-[40px]">Attractions List</h1>

      <div className=" container mx-auto mb-5 py-3">
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
            <div className="" key={testimonial.id}>
              <PopularDestinationCard {...testimonial} />
            </div>
          ))}
        </Glider>
        <div className="glider-arrows flex items-center justify-center gap-3 relative">
          <button
            className="glider-arrow border xl:absolute -top-[17rem] -left-[40px] bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="glider-arrow border xl:absolute  -top-[17rem] -right-[35px] bg-[#FFF2F1] text-[#DC2626] shadow-lg px-5 py-5 rounded-full "
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
            <Link href="/germany">
              {" "}
              <button className="px-5 py-2 font-semibold text-[14px] text-white bg-[#FF5956] rounded-md">
                Book now !{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attraction;
