"use client";
import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import RegisterModal from "../homecomponents/RegisterModal";

const Navbar = () => {
  const [registerModal, setRegisterModal] = useState(false);

  const openModal = () => {
    setRegisterModal(true);
  };

  const closeModal = () => {
    setRegisterModal(false);
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="shadow-md w-full bg-white z-[9999] py-6 fixed top-0 left-0 px-4 overflow-hidden">
      <div className="px-5 flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="/">
            <Image
              src="/assest/navbar/logo.png"
              width={110}
              height={110}
              className="cursor-pointer"
              alt="imgs"
            />
          </Link>
          <div className="hidden xl:block lg:block md:block">
            <Link href="/Filter">
              <input
                type="search"
                placeholder="Search your Designation..."
                className="w-full bg-[#f3f3f3] px-9 py-3 rounded-full cursor-pointer outline-none"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`transition-transform cursor-pointer px-5 transform hover:scale-110 ${
              isHovered ? "animate-bounce" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoCallSharp size={30} className="text-[#ff5956]" />
          </div>
          <button
            className="bg-[#FF5956] text-[white] px-5 py-3"
            onClick={openModal}
          >
            Enquiry Now
          </button>
        </div>
      </div>
      {registerModal && <RegisterModal closeModal={closeModal} />}
    </header>
  );
};

export default Navbar;
