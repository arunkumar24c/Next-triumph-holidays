"use client";
import React, { useState } from "react";

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

  return (
    <header className="shadow-md w-full bg-white z-[9999] py-6 fixed top-0 left-0">
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
                className="w-full bg-[#f3f3f3] px-9 py-3 rounded-full cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div>
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
