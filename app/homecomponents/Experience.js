"use client"
import Image from "next/image";
import React, { useState } from "react";
import Gift from "./Gift";

const Experience = () => {
  const [registerModal, setRegisterModal] = useState(false);

  const openModal = () => {
    setRegisterModal(true);
  };

  const closeModal = () => {
    setRegisterModal(false);
  };
  return (
    <div className="my-16 overflow-hidden">
      <div className="brand-container relative z-50 py-16">
        <div className="bg-[#FFF2F1]   rounded-lg">
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-4 justify-between px-10 items-center py-10">
            {/* left */}
            <div className="py-10 px-10">
              <div className="relative ">
                <Image
                  src={"/assest/gift/img1.png"}
                  width={282}
                  height={170}
                  className=""
                  alt="imgs"
                />
                <Image
                  src={"/assest/gift/img2.png"}
                  width={282}
                  height={170}
                  className="absolute top-0 right-5"
                  alt="imgs"
                />
                <Image
                  src={"/assest/gift/img3.png"}
                  width={282}
                  height={170}
                  className="absolute -top-5 right-11"
                  alt="imgs"
                />
                <Image
                  src={"/assest/gift/gift.gif"}
                  width={71}
                  height={71}
                  className="absolute -top-4 left-11"
                  alt="imgs"
                />
                <Image
                  src={"/assest/navbar/logo.png"}
                  width={157}
                  height={41}
                  className="absolute w-[120px] bottom-6"
                  alt="imgs"
                />
              </div>
            </div>
            {/* right */}
            <div className="px-5 py-10">
              <div className="flex flex-col px-5 gap-5">
                <h1 className="text-[40px] font-bold">Gift an Experience</h1>
                <p className="text-justify font-medium leading-normal text-[14px] text-[#4b4b4b]">
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  We denounce with righteous indignation.{" "}
                </p>
                <div className=" py-2">
                  <button
                    className="px-8 py-2 font-medium text-[14px] text-white bg-[#FF5956] "
                    onClick={openModal}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-z-50 absolute  top-[10rem] -right-[12rem] xl:block lg:block hidden ">
          <Image
            src={"/assest/animate/plan.png"}
            width={300}
            height={300}
            alt="img"
            className="animate-spin-half-and-back "
          />
        </div>
      </div>
      {registerModal && <Gift closeModal={closeModal} />}
    </div>
  );
};

export default Experience;
