"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  
  IoIosArrowUp,
} from "react-icons/io";
import { FaLongArrowAltLeft, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

import { VscFilterFilled } from "react-icons/vsc";
import Link from "next/link";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkboxes, setCheckboxes] = useState(Array(5).fill(false));

  const toggleArrow = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const ratingOptions = [
    [1, <FaStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />],
    [2, <FaStar key={1} />, <FaStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />],
    [3, <FaStar key={1} />, <FaStar key={1}/>, <FaStar key={1} />, <FaRegStar key={1} />, <FaRegStar key={1} />],
    [4, <FaStar key={1} />, <FaStar key={1} />, <FaStar key={1} />, <FaStar key={1} />, <FaRegStar key={1} />],
    [5, <FaStar key={1} />, <FaStar key={1} />, <FaStar key={1} />, <FaStar key={1} />, <FaStar key={1} />],
  ];
  const [sections, setSections] = useState([
    {
      title: "Packages",
      items: [
        "Tour Packages",
        "Experience Packages",
        "Instant Packages",
        "Coupon Packages",
        "Multi Day Tours",
        "Cruise & Boat tours",
      ],
      showList: true,
    },
    {
      title: "Travel Experiences",
      items: [
        "Horse Riding",
        "Treking",
        "Boating",
        "Sky Diving",
        "Adventure Trip",
        "River Boating",
      ],
      showList: true,
    },
    {
      title: "Duration",
      items: ["1-3 Days", "1 week", "2 Weeks", "1 Month"],
      showList: true,
    },
  ]);

  const toggleInputList = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].showList = !updatedSections[index].showList;
    setSections(updatedSections);
  };
  const [showFilters, setShowFilters] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Define your mobile breakpoint here
    setIsMobileScreen(mediaQuery.matches);

    const handleScreenResize = () => {
      setIsMobileScreen(mediaQuery.matches);
    };

    mediaQuery.addListener(handleScreenResize);

    return () => {
      mediaQuery.removeListener(handleScreenResize);
    };
  }, []);

  const handleFilterClick = () => {
    if (isMobileScreen) {
      setShowFilters(!showFilters);
    }
  };
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  const [selectedLocations, setSelectedLocations] = useState("");

  const handleLocationChanges = (e) => {
    setSelectedLocations(e.target.value);
  };
  const locations = [
    { id: 1, name: "Coimbatore, Tamil Nadu" },
    { id: 2, name: "Chennai, Tamil Nadu" },
    { id: 3, name: "Madras, Tamil Nadu" },
  ];
  const locatio = [
    { id: 1, name: "Coimbatore, Tamil Nadu" },
    { id: 2, name: "Chennai, Tamil Nadu" },
    { id: 3, name: "Madras, Tamil Nadu" },
  ];
  return (
    <div className="mt-[6rem]">
      <div className="brand-container">
        <div className="flex justify-end">
          <Link href="/">
            {" "}
            <button className="text-[18px] font-medium bg-[#FF5956] text-white py-3 px-4 my-8 flex gap-2 items-center">
              {" "}
              <span>
                <FaLongArrowAltLeft />
              </span>{" "}
              Back
            </button>
          </Link>
        </div>
        <div className="md:hidden sm:hidden">
          <p
            onClick={handleFilterClick}
            className="text-[18px] font-medium text-[#FF5956] py-4 flex gap-2 items-center"
          >
            Filters
            <span>
              {showFilters ? <VscFilterFilled /> : <VscFilterFilled />}
            </span>
          </p>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col  gap-3">
          {/* left */}
          {(showFilters || !isMobileScreen) && (
            <div className="w-full xl:w-1/4 lg:w-1/4 md:full  ">
              <div className="flex flex-col gap-4 shadow-md border  py-10 px-5">
                {/* 1st */}
                <div className="flex justify-between ">
                  <h2 className="text-[18px] font-medium">Filters</h2>
                  <p className="bg-[#FFF2F1] text-[#FF5956] flex items-center px-3 rounded-full ">
                    <span>
                      <LuDot size={35} />
                    </span>
                    8 Applied{" "}
                    <span className="pl-2">
                      <IoClose />
                    </span>
                  </p>
                </div>
                {/* 2nd */}
                {/* <div className="flex justify-between ">
                  <h2 className="text-[18px] font-medium">Location Details</h2>
                  <p className=" text-[#FF5956] flex items-center px-3 rounded-full underline cursor-pointer">
                    Change
                  </p>
                </div> */}
                {/* 3rd */}
                <div className="flex flex-col gap-3">
                  <p className="text-[12px] text-[#6C6C6C]">Starting Point</p>
                  <div className="relative">
                    <div className="absolute top-2.5 left-2">
                      <IoLocationOutline size={20} />
                    </div>

                    <select
                      className="border cursor-pointer text-[14px] pl-7 py-2 w-full"
                      value={selectedLocation}
                      onChange={handleLocationChange}
                    >
                      <option value="">Select a location</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.name}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* 4th */}
                <div className="flex flex-col gap-3">
                  <p className="text-[12px] text-[#6C6C6C]">Designation</p>
                  <div className="relative">
                    <div className="absolute top-2.5 left-2">
                      <IoLocationOutline size={20} />
                    </div>

                    <select
                      className="border cursor-pointer text-[14px] pl-7 py-2 w-full"
                      value={selectedLocations}
                      onChange={handleLocationChanges}
                    >
                      <option value="">Select a location</option>
                      {locatio.map((location) => (
                        <option key={location.id} value={location.name}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* input */}
                <div className="flex flex-col gap-4 py-4">
                  {sections.map((section, index) => (
                    <div key={index}>
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleInputList(index)}
                      >
                        <h2 className="text-[16px] py-4 font-medium">
                          {section.title}
                        </h2>
                        {/* arrow */}
                        <p
                          className="text-[#000000] flex items-center px-3 rounded-full underline cursor-pointer"
                          style={{
                            transform: section.showList
                              ? "rotate(180deg)"
                              : "rotate(180deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          {section.showList ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </p>
                      </div>

                      {/* input list */}
                      <div
                        className={`transition-all duration-300 ${
                          section.showList ? "block" : "hidden"
                        }`}
                      >
                        {/* List of inputs */}
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center py-2"
                          >
                            <input
                              id={`checked-checkbox-${index}-${itemIndex}`}
                              type="checkbox"
                              value=""
                              className="w-4 h-4 accent-[#FF5956] bg-gray-100 cursor-pointer border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`checked-checkbox-${index}-${itemIndex}`}
                              className="ms-2 text-[12px] font-normal text-[#6C6C6C] dark:text-gray-300"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* rating */}
                <div>
                  <div>
                    <div className="flex justify-between" onClick={toggleArrow}>
                      <h2 className="text-[18px] font-medium py-3">Rating</h2>
                      <p className="text-[#000000] flex items-center px-3 rounded-full underline cursor-pointer">
                        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                      </p>
                    </div>
                    {isOpen && (
                      <div>
                        {ratingOptions.map(([index, ...stars], i) => (
                          <div
                            key={index}
                            className="flex items-center gap-2.5 py-2"
                          >
                            <input
                              id={`checked-checkbox-${index}`}
                              type="checkbox"
                              checked={checkboxes[i]}
                              onChange={() => handleCheckboxChange(i)}
                              className="w-4 h-4 accent-[#FF5956] bg-gray-100 cursor-pointer border-gray-300 rounded"
                            />
                            <div className="flex gap-1">
                              {stars.map((star, j) => (
                                <p key={j} className="text-[#F1C40F]">
                                  {star}
                                </p>
                              ))}
                            </div>
                            <p className="text-[12px] text-[#6C6C6C]">
                              & Above
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* right */}
          <div className="w-full xl:w-3/4 lg:w-3/4 md:full ">
            <p className="text-[#6C6C6C] text-[14px] py-4">8 Results Found.</p>
            <div className="shadow-md border">
              {/* 1 */}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4">
                <div className="w-full h-full">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={360}
                    height={280}
                    className="w-full h-[280px]"
                    alt="imgs"
                  />
                </div>

                <div className="px-2 w-full">
                  <div className="flex justify-between gap-2">
                    <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                      India Beautiful Places
                    </h1>
                  </div>
                  <p className="text-[14px] py-1 font-normal">
                    <span className="text-[#FF5956] text-[14px] font-medium">
                      5 Days 4 Nights
                    </span>{" "}
                  </p>
                  <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] text-justify pb-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium atcorrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.
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
                  <div className="flex  py-2">
                    <Link href="/details">
                      <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4  ">
                {/* left */}
                <div className="relative w-full">
                  <Image
                    src="/assest/tour/6.png"
                    width={380}
                    height={225}
                    className="cursor-pointer w-full   "
                    alt="imgs"
                  />
                  <div className=" bg-[#FF5956BF] w-full absolute bottom-0">
                    <p className="text-white text-center py-3">
                      Explore Myself
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className="w-full">
                  <h1 className="text-[18px] pb-2 text-[#3C3C3C] font-semibold ">
                    India Beautiful Places
                  </h1>
                  <p className="text-[#000000] leading-normal text-justify text-[14px] px-1">
                    We denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure of
                    the We denounce with righteous indignation who are so
                    beguiled and demoralized by the pleasure of theWe denounce
                    with brand d
                  </p>
                  <div className="py-4 ">
                    <Link href="/">
                      <button className="bg-[#FFF2F1] py-3 px-3 flex text-[#F96768] items-center gap-1">
                        View Experience{" "}
                        <IoIosArrowForward className="text-[#F96768]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4  ">
                {/* left */}
                <div className="relative w-full">
                  <Image
                    src="/assest/tour/6.png"
                    width={380}
                    height={225}
                    className="cursor-pointer w-full   "
                    alt="imgs"
                  />
                  <div className=" bg-[#FF5956BF] w-full absolute bottom-0">
                    <p className="text-white text-center py-3">
                      Explore Myself
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className="w-full">
                  <h1 className="text-[18px] pb-2 text-[#3C3C3C] font-semibold ">
                    India Beautiful Places
                  </h1>
                  <p className="text-[#000000] leading-normal text-justify text-[14px] px-1">
                    We denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure of
                    the We denounce with righteous indignation who are so
                    beguiled and demoralized by the pleasure of theWe denounce
                    with brand d
                  </p>
                  <div className="py-4 ">
                    <Link href="/">
                      <button className="bg-[#FFF2F1] py-3 px-3 flex text-[#F96768] items-center gap-1">
                        View Experience{" "}
                        <IoIosArrowForward className="text-[#F96768]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 3th */}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4">
                <div className="w-full h-full">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={360}
                    height={280}
                    className="w-full h-[280px]"
                    alt="imgs"
                  />
                </div>

                <div className="px-2 w-full">
                  <div className="flex justify-between gap-2">
                    <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                      India Beautiful Places
                    </h1>
                  </div>
                  <p className="text-[14px] py-1 font-normal">
                    <span className="text-[#FF5956] text-[14px] font-medium">
                      5 Days 4 Nights
                    </span>{" "}
                  </p>
                  <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] text-justify pb-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium atcorrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.
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
                  <div className="flex  py-2">
                    <Link href="/details">
                      <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/*  4*/}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4">
                <div className="w-full h-full">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={360}
                    height={280}
                    className="w-full h-[280px]"
                    alt="imgs"
                  />
                </div>

                <div className="px-2 w-full">
                  <div className="flex justify-between gap-2">
                    <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                      India Beautiful Places
                    </h1>
                  </div>
                  <p className="text-[14px] py-1 font-normal">
                    <span className="text-[#FF5956] text-[14px] font-medium">
                      5 Days 4 Nights
                    </span>{" "}
                  </p>
                  <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] text-justify pb-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium atcorrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.
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
                  <div className="flex  py-2">
                    <Link href="/details">
                      <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col px-5 py-5 gap-4">
                <div className="w-full h-full">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={360}
                    height={280}
                    className="w-full h-[280px]"
                    alt="imgs"
                  />
                </div>

                <div className="px-2 w-full">
                  <div className="flex justify-between gap-2">
                    <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                      India Beautiful Places
                    </h1>
                  </div>
                  <p className="text-[14px] py-1 font-normal">
                    <span className="text-[#FF5956] text-[14px] font-medium">
                      5 Days 4 Nights
                    </span>{" "}
                  </p>
                  <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] text-justify pb-2">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium atcorrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.
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
                  <div className="flex  py-2">
                    <Link href="/details">
                      <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
