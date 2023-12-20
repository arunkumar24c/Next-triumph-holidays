"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const FaqData = [
  {
    id: "1",
    question: "What are the best tour packages of Singapore?",
    day:"1",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized . ",
  },
  {
    id: "2",
    question: "What are the best tour packages of Singapore? ",
    day:"2",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized . ",
  },
  {
    id: "3",
    question: "What are the best tour packages of Singapore?",
    day:"3",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
  {
    id: "4",
    question: "What are the best tour packages of Singapore? ",
    day:"4",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
  {
    id: "5",
    question: "What are the best tour packages of Singapore? ",
    day:"5",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
];

const Faq = () => {
  return (
    <>
      <div className="mx-auto container " id="faq">
        <h1 className="text-[black]  py-5">Itinerary</h1>
        <div className="">
          {FaqData.map((values, index) => {
            return <FaqCard key={index} {...values} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;

const FaqCard = ({ question, answer, day }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand-container ">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer bg-[#FFF2F1] justify-between items-center gap-6  px-5  w-full"
        >
          <p className="font-medium text-[16px] flex gap-2 items-center   my-5">
            <span className="bg-[#FF5956] rounded-md text-[white] px-2 py-1">
              Day{""} {day}
            </span>
            {question}
          </p>
          <AiOutlineClose
            size={20}
            className={`${
              open ? "" : "rotate-45"
            } h-5 w-5 transition-transform duration-500`}
          />
        </div>
        <div
          className={`${
            open
              ? "max-h-[1000px] bg-[#FFF2F1] transition-max-h duration-700 ease-in-out overflow-hidden"
              : "max-h-0 transition-max-h duration-700  ease-in-out overflow-hidden"
          }`}
        >
          <Image
            src={"/assest/tour/1.png"}
            width={300}
            height={300}
            alt=""
            className="mx-5"
          />
          <div className="flex items-center px-5 py-4 gap-2">
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
          <p className="transition-transform leading-relaxed duration-500 text-[14px] text-[black] font-medium px-5 pb-5 bg-[#FFF2F1]">
            {answer}
          </p>
        </div>
        <hr className="mt-3 border-[#fff]" />
      </div>
    </>
  );
};
