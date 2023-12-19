"use client"
import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Gift = ({ closeModal }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };


  return (
    <div className="fixed top-[2rem] left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[350px] xl:w-[550px] lg:w-[550px] md:w-[450px] rounded-md">
        {submitted ? (
          <Thanks closeModal={closeModal} />
        ) : (
          <>
            <div className="relative px-2 bg-[#FF5956]">
              <div className="flex justify-center items-center text-center text-white px-16 py-4">
                <h2 className="text-[14px] font-semibold text-center ">
                  Gift Card Details
                </h2>
              </div>
              <p
                className="text-end absolute right-4 top-4 text-white cursor-pointer"
                onClick={closeModal}
              >
                <IoMdClose />
              </p>
            </div>

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
                      placeholder="phone"
                      className="w-full py-3 px-5 border text-[#6C6C6C]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Name of the Recipient"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <input
                    type="text"
                    placeholder="Recipient Email"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <input
                    type="text"
                    placeholder="Recipient Phone"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <textarea
                    placeholder="Note"
                    className="px-5 py-3 pb-8 border text-[#6C6C6C]"
                  ></textarea>
                </div>
                <p className="text-[12px] px-5">
                  Any queries on gift card check{" "}
                  <span className="underline text-[#FF5956]">Contact us</span> .
                </p>
                <div className="py-4 px-5">
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

export default Gift;
