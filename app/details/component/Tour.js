"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

import { GoChevronDown, GoChevronUp, GoDot } from "react-icons/go";
import { CiStar } from "react-icons/ci";

const Tour = ({ closeModal }) => {
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <div className="brand-container">
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row gap-4">
          {/* left container */}
          <div className="w-full xl:w-1/2 overflow-hidden lg:w-1/2 md:w-full flex flex-col gap-6 relative bg-[white]">
            {/* 1st section */}
            <div className="shadow-md">
              <div className="flex flex-col gap-4 px-4 py-4 border">
                {/* 1 */}
                <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row items-center gap-5">
                  <h1 className="text-[28px]">Himalayan Tour</h1>
                  <div className="flex items-center gap-3">
                    {" "}
                    <p className="bg-[#FF5956] text-white flex items-center px-3 py-1 rounded-md">
                      <span className="text-white">
                        <FaStar />
                      </span>
                      4.5
                    </p>
                    <p className="text-[#9CA3AF] text-[12px] font-light italic">
                      (246 Reviews)
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex items-center gap-4">
                  <p className="flex items-center gap-2 text-[#000000]">
                    <FaLocationDot className="text-[#FF5956]" /> North India
                  </p>
                  <p className="flex items-center gap-2 text-[#000000]">
                    <FaClock className="text-[#FF5956]" /> 5 Days/ 4 Nights
                  </p>
                </div>
                {/* 3rd */}
                <div className="flex flex-col gap-3">
                  {/* large image */}
                  <Image
                    src={selectedImage.src}
                    width={300}
                    height={600}
                    alt="img"
                    className="w-full h-[600px] py-2  rounded-md"
                  />
                  {/* small image */}
                  <div>
                    <div className="flex ss gap-4 overflow-x-auto">
                      {ImageData.map((imageData, index) => (
                        <div
                          className={`relative flex-shrink-0 ${
                            selectedImage === imageData
                              ? "border border-red-500"
                              : ""
                          }`}
                          key={index}
                        >
                          <div
                            className="w-100 h-[60px] overflow-hidden rounded-md "
                            onClick={() => handleImageClick(imageData)}
                          >
                            <Image
                              src={imageData.src}
                              width={100}
                              height={60}
                              className=""
                              alt={imageData.alt}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <h2 className="text-[18px] font-semibold">About the Tour</h2>
              <p className="py-5 text-[14px] font-normal">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atcorrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="pb-5 text-[14px] font-normal">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atcorrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>
            {/* 3rd section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <h2 className="text-[18px] font-semibold">Quick Info</h2>
              <p className="py-1 text-[14px] font-normal">
                Destination Covered : Candada-America-Switz
              </p>
              <p className="pb-1 text-[14px] font-normal">
                Duration : 5 days / 4 Nights
              </p>
              <p className="pb-1 text-[14px] font-normal">
                Start Point : Candada-America-Switz
              </p>
              <p className=" text-[14px] font-normal">
                End Point : Candada-America-Switz
              </p>
            </div>
            {/* 4th section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <h2 className="text-[18px] font-semibold">Experience Covered</h2>
              <p className="py-1 text-[14px] font-normal flex items-center gap-2">
                <GoDotFill className=" text-[#FF5956]" />
                Night Safari
              </p>
              <p className="py-1 text-[14px] font-normal flex items-center gap-2">
                <GoDotFill className=" text-[#FF5956]" />
                Night Safari
              </p>
              <p className="py-1 text-[14px] font-normal flex items-center gap-2">
                <GoDotFill className=" text-[#FF5956]" />
                Night Safari
              </p>
              <p className="py-1 text-[14px] font-normal flex items-center gap-2">
                <GoDotFill className=" text-[#FF5956]" />
                Night Safari
              </p>
            </div>
            <h2 className="text-[18px]">Select Your Packages :</h2>
            {/* 5th section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <h2 className="text-[18px] font-semibold">How to Reach!</h2>
              <p className="py-5 text-[14px] font-normal">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atcorrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="pb-5 text-[14px] font-normal">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoraliz the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble thena bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain.
              </p>
            </div>
            {/* 6th section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-4">
                  <p>
                    <GoDot className="" size={35} />
                  </p>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] ">Deluxe Package</h1>
                    <p className="text-[14px] font-normal">
                      We can write a small description about the package here.
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <FaClock className="text-[#FF5956]" />
                      </span>
                      5 Days/ 4 Nights
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[14px] line-through">INR 73,860</h2>
                  <h2 className="text-[24px] font-semibold text-[#ff5956]">
                    INR 56,815
                  </h2>
                  <p className="text-[12px] text-[#9CA3AF]">Per Adult</p>
                </div>
              </div>
              {/* image section */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  showImages ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4 w-full py-5">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={200}
                    height={300}
                    className="w-full"
                    alt="img"
                  />
                  <Image
                    src={"/assest/tour/1.png"}
                    width={200}
                    height={300}
                    className="w-full"
                    alt="img"
                  />
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
              </div>

              <div className="py-5">
                <p
                  className="flex gap-4 text-[#FF5956] text-[14px] items-center cursor-pointer"
                  onClick={handleToggleImages}
                >
                  {showImages ? "Hide Details" : "Show Details"}{" "}
                  {showImages ? <GoChevronUp /> : <GoChevronDown />}
                </p>
              </div>
            </div>
            {/* 7th section */}
            <div className="shadow-md border rounded-md px-5 py-5">
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-4">
                  <p>
                    <GoDot className="" size={35} />
                  </p>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] ">Deluxe Package</h1>
                    <p className="text-[14px] font-normal">
                      We can write a small description about the package here.
                    </p>
                    <p className="flex items-center gap-2">
                      <span>
                        <FaClock className="text-[#FF5956]" />
                      </span>
                      5 Days/ 4 Nights
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[14px] line-through">INR 73,860</h2>
                  <h2 className="text-[24px] font-semibold text-[#ff5956]">
                    INR 56,815
                  </h2>
                  <p className="text-[12px] text-[#9CA3AF]">Per Adult</p>
                </div>
              </div>
              {/* image section */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  showImage ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4 w-full py-5">
                  <Image
                    src={"/assest/tour/1.png"}
                    width={200}
                    height={300}
                    className="w-full"
                    alt="img"
                  />
                  <Image
                    src={"/assest/tour/1.png"}
                    width={200}
                    height={300}
                    className="w-full"
                    alt="img"
                  />
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
              </div>

              <div className="py-5">
                <p
                  className="flex gap-4 text-[#FF5956] text-[14px] items-center cursor-pointer"
                  onClick={handleToggleImage}
                >
                  {showImage ? "Hide Details" : "Show Details"}{" "}
                  {showImage ? <GoChevronUp /> : <GoChevronDown />}
                </p>
              </div>
            </div>
            {/* 8th section */}
            <div className="shadow-md border rounded-md py-5">
              <p className="px-5">Reviews</p>
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
                    <p className="text-[16px] font-semibold">Elizabeth</p>
                    <div className="flex ">
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <CiStar />
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
              {/* 2 */}
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
                    <p className="text-[16px] font-semibold">Elizabeth</p>
                    <div className="flex ">
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <CiStar />
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
              {/* 3rd */}
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
                    <p className="text-[16px] font-semibold">Elizabeth</p>
                    <div className="flex ">
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <FaStar className="text-[#F1C40F]" />
                      <CiStar />
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
            {/* 9th section */}
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
                      <Image
                        src={"/assest/tour/up.png"}
                        width={24}
                        height={24}
                        className=""
                        alt="imgs"
                      />
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
                      <Image
                        src={"/assest/tour/up.png"}
                        width={24}
                        height={24}
                        className=""
                        alt="imgs"
                      />
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
            <div className="bg-[#FF5956] overflow-hidden rotate-[52deg] absolute top-[19px] -right-[16px] px-5 py-1">
              <p className="text-white">32% Off</p>
            </div>
          </div>
          {/* right container */}
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <h2 className="text-[20px] py-5 font-semibold ">
              Fill the form for Enquiry
            </h2>
            <div className="">
              {submitted ? (
                <Thanks closeModal={closeModal} />
              ) : (
                <>
                  <div className="">
                    <div className="shadow-md border text-[#6C6C6C] bg-[#F9F9F9] px-5 py-5">
                      <div className="px-5 py-5 flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full py-3 px-5 border text-[#6C6C6C]"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full py-3 px-5 border text-[#6C6C6C]"
                        />
                        <div className="flex gap-4">
                          <select className="py-3 px-5 border">
                            <option value="+91">+91</option>
                            <option value="+91">+91</option>
                            <option value="+91">+91</option>
                          </select>
                          <input
                            type="number"
                            placeholder=""
                            className="w-full py-3 px-5 border text-[#6C6C6C]"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Choose Date of Travel"
                          className="w-full py-3 px-5 border text-[#6C6C6C]"
                        />
                        <input
                          type="text"
                          placeholder="Attendance"
                          className="w-full py-3 px-5 border text-[#6C6C6C]"
                        />
                        <textarea
                          placeholder="Note"
                          className="px-5 py-3 pb-8 border text-[#6C6C6C]"
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
                        <button
                          onClick={handleSubmit}
                          className="bg-[#FF5956] w-full py-3 text-white text-center"
                        >
                          Send Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Thanks = ({ closeModal }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <Image
          src={"/assest/tour/map.png"}
          width={200}
          height={200}
          className=""
          alt="img"
        />
        <h1 className="text-[18px] font-medium ">
          {" "}
          Thank you for reaching out.
        </h1>
        <p className="text-[12px] text-[#9CA3AF]">
          A member of our team will be in touch with you soon!
        </p>
        {/* close button */}
        <button
          className="text-[white] bg-[#FF5956] px-5 py-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Tour;
