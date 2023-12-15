"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiEarthAsiaOceania, GiParachute } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import Modual from "./Modual";
import Moduals from "./Moduals";
import Link from "next/link";

const Hero = () => {
   

   
   const [textIndex, setTextIndex] = useState(0);
   const texts = [" Travel Moments.", " Travel Moments."];

   useEffect(() => {
     const typingEffect = setInterval(() => {
       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
     }, 2000);

     return () => clearInterval(typingEffect);
   }, [texts.length]);
  const [registerModal, setRegisterModal] = useState(false);

  const openModal = () => {
    setRegisterModal(true);
  };

  const closeModal = () => {
    setRegisterModal(false);
  };
  const [registerModals, setRegisterModals] = useState(false);

  const openModals = () => {
    setRegisterModals(true);
  };

  const closeModals = () => {
    setRegisterModals(false);
  };
  return (
    <div className=" -z-50">
      <div className="relative mt-[4rem]">
        {/* Video container */}
        <div className="absolute inset-0 z-0 overflow-hidden  mt-[4rem]">
          <iframe
            className="absolute py-10 inset-0 w-full h-full"
            src="https://www.youtube.com/embed/RzVvThhjAKw?autoplay=1&mute=1&loop=1&playlist=RzVvThhjAKw"
            title="Background Video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content */}
        <div className="relative z-10 bg-[#FF5956BF] mt-[4rem] ">
          <div className="brand-container px-5 py-10">
            <div className="flex flex-col justify-center items-center py-10">
              <Image
                src="/assest/navbar/logo1.png"
                width={110}
                height={110}
                className="cursor-pointer"
                alt="imgs"
              />
              <h2 className="text-white text-[40px] py-4">
                Discover story-worthy
              </h2>
              <div className="text-center">
                <h1 className=" xl:w-full lg:w-full md:w-full w-[350px]  xl:text-[100px] md:text-[24px] lg:text-[38px] text-[24px]  font-bold text-[#E8FF5B] relative inline-block overflow-hidden px-5">
                  <span className="typing-text block whitespace-nowrap overflow-hidden">
                    {texts[textIndex]}
                    <span className="cursor w-[1px] inline-block bg-orange-500 h-[1em] absolute top-0 animate-blink" />
                  </span>
                </h1>
              </div>

              <p className="text-[#f5f5f5] text-[20px] text-center leading-normal font-medium py-5">
                Discover an enhanced travel experience at this location. Immerse
                yourself in a superior journey with us.
              </p>
              <div className="hidden xl:block">
                <div className="bg-white shadow-lg px-3 py-2 flex flex-wrap gap-3  ">
                  {/* 1 */}
                  <div className="relative">
                    <div className="bg-[#F5F5F5] mx-2 shadow-md  cursor-pointer">
                      <div className="flex justify-between gap-5 p-2 ">
                        <div onClick={openModal} className="cursor-pointer">
                          <p className="text-[#74747C] text-[14px]">
                            Departure
                          </p>
                          <div className="flex gap-2 items-center">
                            <p className="text-[#3C3C3C] text-[16px]">
                              Coimbatore, Tamil Nadu, India
                            </p>
                            <p>
                              <IoIosArrowDown />
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <div
                            className="border border-transparent border-l-[#74747C] px-2 relative "
                            onClick={openModals}
                          >
                            <p className="text-[14px] text-[#74747C] cursor-pointer">
                              Destination
                            </p>
                            <div className="flex gap-2 items-center">
                              <p className="text-[#3C3C3C] text-[16px]">
                                Coimbatore, Tamil Nadu, India
                              </p>
                              <p>
                                <IoIosArrowDown />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="bg-[#FF5956]  flex justify-center items-center ">
                    <Link href="/Filter">
                      <div className=" w-[55px] h-[55px] flex justify-center items-center">
                        <CiSearch size={25} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* section 2 */}
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-center items-center gap-8 mt-16">
                {/* 1 */}
                <div className="flex shadow-md justify-between items-center gap-5 bg-white/20 p-5 rounded-full   ">
                  {/* left */}

                  <div className="flex  relative ">
                    <div>
                      {" "}
                      <Image
                        src="/assest/Hero/img1.png"
                        width={70}
                        height={70}
                        className="cursor-pointer   "
                        alt="imgs"
                      />
                    </div>
                    <div>
                      {" "}
                      <Image
                        src="/assest/Hero/img2.png"
                        width={70}
                        height={70}
                        className="cursor-pointer   "
                        alt="imgs"
                      />
                    </div>
                    <div>
                      {" "}
                      <Image
                        src="/assest/Hero/img3.png"
                        width={70}
                        height={70}
                        className="cursor-pointer   "
                        alt="imgs"
                      />
                    </div>
                  </div>
                  {/* right */}
                  <div className="">
                    <h2 className="text-white text-[16px]">1200 + Customers</h2>
                    <p className="text-white text-[14px] font-normal">
                      Pleased Customers Around
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex bg-white/20 shadow-md rounded-full p-5 gap-2">
                  {/* left */}
                  <div>
                    <Image
                      src="/assest/Hero/img4.png"
                      width={70}
                      height={70}
                      className="cursor-pointer   "
                      alt="imgs"
                    />
                  </div>
                  {/* right */}
                  <div className="flex items-center gap-2 px-5">
                    <div>
                      <h1 className="text-white text-[16px] font-medium">
                        Looking for a Romantic Places?
                      </h1>
                      <p className="text-white text-[14px] font-normal">
                        Browse Featured places
                      </p>
                    </div>
                    <FaLongArrowAltRight className="text-white" size={35} />
                  </div>
                </div>
              </div>
            </div>

            {/* exp */}
            {/* <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-rows-2 sm:grid-rows-2 justify-center items-center text-white gap-2 py-6 ">
            <div className="flex items-center bg-white/20 rounded-full py-5  justify-center gap-2 mb-3 pl-2 mr-10">
              <GiParachute size={35} />
              <div className="">
                <p className="text-sm sm:text-base">13 +</p>
                <p className="text-xs sm:text-sm">YEARS EXPERTISE</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/20 rounded-full py-5 gap-2 mb-3 mr-10">
              <GiEarthAsiaOceania size={35} />
              <div className="">
                <p className="text-sm sm:text-base">7,000 +</p>
                <p className="text-xs sm:text-sm">BOOKINGS</p>
              </div>
            </div>
            <div className="flex items-center  justify-center bg-white/20 rounded-full py-5 gap-2 mb-3 mr-10">
              <FaHandHoldingUsd size={35} className="" />
              <div className="">
                <p className="text-sm sm:text-base">30,000 +</p>
                <p className="text-xs sm:text-sm">TRAVELLERS</p>
              </div>
            </div>
            <div className="flex items-center bg-white/20 rounded-full py-5  justify-center gap-4 mb-3 mr-10">
              <GoPerson size={35} />
              <div className="">
                <p className="text-sm sm:text-base">150 +</p>
                <p className="text-xs sm:text-sm">DESTINATIONS</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {registerModal && <Modual closeModal={closeModal} />}
      {registerModals && <Moduals closeModal={closeModals} />}
    </div>
  );
};

export default Hero;
