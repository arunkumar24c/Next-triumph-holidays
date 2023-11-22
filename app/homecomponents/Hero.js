"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
const Hero = () => {
   const controls = useAnimation();

   useEffect(() => {
     const sequence = async () => {
       await controls.start({
         opacity: 1,
         y: 0,
         transition: { duration: 1, type: "spring", stiffness: 120 },
       });
       await controls.start({
         opacity: 0,
         y: "-100%",
         transition: { duration: 1, type: "spring", stiffness: 12 },
       });
       sequence();
     };

     sequence();
   }, [controls]);
  return (
    <div className="relative py-16">
      {/* Video container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FF5956BF] ">
        <iframe
          className="absolute py-10 inset-0 w-full h-[100vh]"
          src="https://www.youtube.com/embed/RzVvThhjAKw?autoplay=1&mute=1&loop=1&playlist=RzVvThhjAKw"
          title="Background Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-[#FF5956BF] ">
        <div className="brand-container px-5 py-10">
          <div className="flex flex-col justify-center items-center py-10">
            <Image
              src="/assest/navbar/logo.jpg"
              width={110}
              height={110}
              className="cursor-pointer"
              alt="imgs"
            />
            <h2 className="text-white text-[40px] py-4">Discover story-worthy</h2>
            <div className="text-center">
              <motion.h1 className=" xl:text-[100px] md:text-[24px] lg:text-[38px] text-[24px] font-bold text-[#E8FF5B]">
                <motion.span
                  style={{ display: "inline-block", lineHeight: "1em" }}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={controls}
                >
                  Travel Moments.
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-[#f5f5f5] text-[20px] text-center leading-normal font-medium py-5">
              Discover an enhanced travel experience at this location. Immerse
              yourself in a superior journey with us.
            </p>
            <div className="hidden xl:block">
              <div className="bg-white shadow-lg flex flex-wrap gap-3 my-8 rounded-2xl">
                {/* 1 */}
                <div className="bg-[#F5F5F5] m-4 shadow-md rounded-md">
                  <div className="flex justify-between gap-5 p-5">
                    <div>
                      <p className="text-[#74747C] text-[14px]">Departure</p>
                      <p className="text-[#3C3C3C] text-[16px]">London (LON)</p>
                    </div>
                    <div className="flex gap-5">
                      <Image
                        src="/assest/Hero/vector.png"
                        width={42}
                        height={12}
                        className="cursor-pointer"
                        alt="imgs"
                      />
                      <div className="border border-transparent border-l-[#74747C] px-2">
                        <p className="text-[14px] text-[#74747c]">
                          Destination
                        </p>
                        <p className="text-[16px] text-[#74747c]">
                          Where do you want to go?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="bg-[#F5F5F5] m-4 shadow-md rounded-md">
                  <div className="flex justify-between gap-5 p-5">
                    <div>
                      <p className="text-[#74747c] text-[14px]">Wed, 22 Nov</p>
                      <p className="text-[#74747c] text-[16px]">Leaving on</p>
                    </div>

                    <div className="border border-transparent border-l-[#74747C] px-2">
                      <p className="text-[#74747c] text-[14px]">Returning on</p>
                      <p className="text-[#3c3c3c] text-[16px]">Sat, 25 Nov</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="bg-[#F5F5F5] m-4 shadow-md rounded-md">
                  <div className="p-5">
                    <p className="text-[#74747c] text-[14px]">Attendance</p>
                    <p className="text-[#3c3c3c] text-[16px]">5</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="bg-[#FF5956] m-4 flex justify-center items-center rounded-lg">
                  <div className="px-11 py-5 ">
                    <CiSearch size={25} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
