"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

import { GoChevronDown, GoChevronUp, GoDot } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import Faq from "./Faq";
import { IoMdClose } from "react-icons/io";

const Tour = () => {
  const ImageData = [
    { src: "/assest/tour/img1.png", alt: "Image 1" },
    { src: "/assest/tour/s1.png", alt: "Image 2" },
    { src: "/assest/tour/s2.png", alt: "Image 3" },
    { src: "/assest/tour/s3.png", alt: "Image 4" },
    { src: "/assest/tour/s4.png", alt: "Image 5" },
    { src: "/assest/tour/s1.png", alt: "Image 6" },
    { src: "/assest/tour/s2.png", alt: "Image 7" },
  ];

  const [selectedImage, setSelectedImage] = useState(ImageData[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const [showImages, setShowImages] = useState(true);

  const handleToggleImages = () => {
    setShowImages(!showImages);
  };
  const [showImage, setShowImage] = useState(true);

  const handleToggleImage = () => {
    setShowImage(!showImage);
  };
   const [showMap, setShowMap] = useState(false);

   const toggleMap = () => {
     setShowMap(!showMap);
   };
  return (
    <div className="relative">
      <div className="brand-container">
        <div className="flex justify-center px-10 py-10 w-full">
          <div className="flex flex-col justify-center items-center w-full">
            {" "}
            <Image
              src={"/assest/tour/4.png"}
              width={200}
              height={250}
              alt=""
              className=""
            />
            <p className="text-[16px] font-semibold py-2 ">
              Mikky Matorn |<span className="italic">Photgrapher</span>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[40px] text-[black] font-semibold">
              Happy Client about the trip
            </p>

            <p className="text-[22px] italic leading-normal ">
              “Travel is the movement of people between distant geographical
              locations. It can be for various purposes, such as tourism,
              business, education, or personal reasons. Traveling allows
              individuals to explore new cultures, landscapes, and experiences,
              and it often contributes to personal growth and a broader
              perspective on the world.”
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row gap-4">
          {/* left container */}
          <div className="w-full xl:w-1/2 overflow-hidden lg:w-1/2 md:w-full flex flex-col gap-6  bg-[white]">
            {/* 1 section */}
            <div className="  px-5 py-5">
              <h2 className="text-[18px] font-semibold">The trip is About!</h2>
              <p className="py-5 text-[14px] font-normal">
                Once upon a time, in a small town nestled between rolling hills
                and meandering rivers, lived a group of friends named Sarah,
                Mark, and Alex. They were known for their adventurous spirits
                and a shared love for exploring new places. One sunny afternoon,
                they gathered at Sarah&apos;s cozy house, surrounded by the
                picturesque beauty of their hometown.
              </p>
              <p className="pb-5 text-[14px] font-normal">
                As they sat on the porch, sipping lemonade and reminiscing about
                past adventures, the idea of a spontaneous road trip took root
                in their minds. The excitement grew with each passing moment
                until, finally, they decided to embark on a journey to the
                nearby mountains—a place none of them had explored before.
              </p>
              <p className="pb-5 text-[14px] font-normal">
                With a hastily packed bag and a playlist of their favorite
                tunes, the trio set out in Mark&apos;s trusty old car, winding
                through scenic roads that led to the majestic peaks on the
                horizon. The car was filled with laughter, hatter, and the
                thrill of the unknown. They stopped at quaint roadside diners,
                capturing the essence of each moment through photographs and
                shared stories.As they ascended the mountain roads, the air grew
                crisper, and the landscape transformed into a winter wonderland.
                The friends marveled at the snow-covered trees and the panoramic
                views stretching before them.
              </p>
              <p className="pb-5 text-[14px] font-normal">
                And so, the trio returned to their small town with hearts full
                of wanderlust, knowing that the spirit of adventure would
                continue to guide them on many more journeys, each trip
                promising new stories, laughter, and the magic of the unknown.
              </p>
            </div>

            {/* faq */}
            <Faq />

            {/* 3rd section */}
            <div className="shadow-md border rounded-md  py-5">
              <p className="px-5 font-semibold">Map</p>
              <div className="border shadow-md px-5 mx-5 my-4 py-4">
                <div className="flex gap-2">
                  <Image
                    src={"/assest/tour/3.png"}
                    width={80}
                    height={80}
                    alt=""
                    className="w-[80px] h-[80px]"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-[#9CA3AF] font-semibold">
                      Starting Point
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#FF5956]">
                        <FaLocationDot />
                      </p>
                      <p className="text-[18px] font-semibold">Moraine Lake</p>

                      <div className="relative">
                        <div onClick={toggleMap}>
                          <Image
                            src="/assest/tour/up.png"
                            width={24}
                            height={24}
                            className=""
                            alt="imgs"
                          />
                        </div>

                        {showMap && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="relative">
                              <button
                                className="absolute top-0 right-0 m-4 text-white"
                                onClick={toggleMap}
                              >
                                <IoMdClose size={35} />
                              </button>
                              <iframe
                                src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
                                width="640"
                                height="480"
                              ></iframe>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-[14px] leading-normal text-justify">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium atcorrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident, culpa qui officia deserunt mollitia animi, id
                      est laborum et dolorum fuga.
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex gap-2 py-5">
                  <Image
                    src={"/assest/tour/3.png"}
                    width={80}
                    height={80}
                    alt=""
                    className="w-[80px] h-[80px]"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-[#9CA3AF] font-semibold">
                      Starting Point
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#FF5956]">
                        <FaLocationDot />
                      </p>
                      <p className="text-[18px] font-semibold">Moraine Lake</p>
                      <div className="relative">
                        <div onClick={toggleMap}>
                          <Image
                            src="/assest/tour/up.png"
                            width={24}
                            height={24}
                            className=""
                            alt="imgs"
                          />
                        </div>

                        {showMap && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="relative">
                              <button
                                className="absolute top-0 right-0 m-4 text-white"
                                onClick={toggleMap}
                              >
                                <IoMdClose size={35} />
                              </button>
                              <iframe
                                src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
                                width="640"
                                height="480"
                              ></iframe>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-[14px] leading-normal text-justify">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium atcorrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident, culpa qui officia deserunt mollitia animi, id
                      est laborum et dolorum fuga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right container */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <h2 className="text-[20px] py-5 font-semibold ">
              Fill the form for Enquiry
            </h2>
            <div className="shadow-md border text-[#6C6C6C] bg-[#F9F9F9]">
              <div className="px-5 py-5 flex flex-col gap-3">
                {" "}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-3 px-5"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full py-3 px-5"
                />
                <div className="flex gap-4">
                  <select className="py-3 px-5">
                    <option value="+91">+91</option>
                    <option value="+91">+91</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="number"
                    placeholder=""
                    className="w-full py-3 px-5"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Choose Date of Travel"
                  className="w-full py-3 px-5"
                />
                <input
                  type="text"
                  placeholder="Attendance"
                  className="w-full py-3 px-5"
                />
                <textarea
                  placeholder="Note"
                  className="px-5 py-3 pb-8"
                ></textarea>
              </div>
              <div className="px-7 flex flex-col gap-2 py-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/assest/tour/tick.png"}
                    width={15}
                    height={15}
                    className=""
                    alt="img"
                  />
                  <p className="text-[12px] font-normal leading-normal ">
                    We assure the privacy of your contact data.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/assest/tour/tick.png"}
                    width={15}
                    height={15}
                    className=""
                    alt="img"
                  />
                  <p className="text-[12px] font-normal leading-normal ">
                    We assure the privacy of your contact data.
                  </p>
                </div>
                <button className="bg-[#FF5956] rounded-md w-full py-3 text-white text-center">
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-50 absolute  -top-[2rem] -right-[14rem] xl:block lg:block hidden ">
        <Image
          src={"/assest/animate/plan.png"}
          width={300}
          height={300}
          alt="img"
          className="animate-spin-half-and-back "
        />
      </div>
    </div>
  );
};

export default Tour;
