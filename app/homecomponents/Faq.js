"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FaqData = [
  {
    id: "1",
    question: "What are the best tour packages of Singapore?",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized . ",
  },
  {
    id: "2",
    question: "What are the best tour packages of Singapore? ",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized . ",
  },
  {
    id: "3",
    question: "What are the best tour packages of Singapore?",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
  {
    id: "4",
    question: "What are the best tour packages of Singapore? ",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
  {
    id: "5",
    question: "What are the best tour packages of Singapore? ",
    answer:
      "We denounce with righteous indignation and dislike men  who are so beguiled and demoralized by the charms of pleasure of the We denounce with righteous indignationwho are so beguiled and demoralized .",
  },
];

const Faq = () => {
  return (
    <>
      <div className="mx-auto container py-10" id="faq">
        <h1 className="text-[black] text-[40px] text-center py-10">
          FAQs
        </h1>
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

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand-container px-2">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer bg-[#FFF2F1] items-center gap-6  px-5  w-full"
        >
          <AiOutlineClose
            size={20}
            className={`${
              open ? "" : "rotate-45"
            } h-5 w-5 transition-transform duration-500`}
          />
          <p className="font-semibold text-[16px]  py-5 my-5">
            {question}
          </p>
        </div>
        <div
          className={`${
            open
              ? "max-h-[1000px] transition-max-h duration-700 ease-in-out overflow-hidden"
              : "max-h-0 transition-max-h duration-700  ease-in-out overflow-hidden"
          }`}
        >
          <p className="transition-transform leading-relaxed duration-500 text-[14px] text-[black] font-medium px-5 py-8 bg-[#FFF2F1]">
            {answer}
          </p>
        </div>
        <hr className="mt-3 border-[#fff]" />
      </div>
    </>
  );
};
