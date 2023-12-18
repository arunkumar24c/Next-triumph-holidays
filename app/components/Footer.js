"use client"
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import React, { useRef } from "react";


const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  return (
    <div className="bg-[#FFF2F1] relative">
      <div className="brand-container px-5 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 xl:justify-items-center lg:justify-items-center">
          {/* 1 */}
          <div>
            <h2 className="text-[#FF5956] text-[16px] font-semi-bold py-4">
              Triumph Holidays
            </h2>
            <div className="flex flex-col gap-3">
              <p>About Us</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Testimonials</p>
              <p>Visa</p>
            </div>
          </div>
          {/* 2 */}
          <div>
            <h2 className="text-[#FF5956] text-[16px] font-semi-bold py-4">
              Policy
            </h2>
            <div className="flex flex-col gap-3">
              <p>Frequently asked Question</p>
              <p>Terms & Conditions</p>
              <p>Privacy</p>
              <p>Cancellations</p>
              <p>Sitemap</p>
              <p>Contact Us</p>
            </div>
          </div>
          {/* 3 */}
          <div>
            <h2 className="text-[#FF5956] text-[16px] font-semi-bold py-4">
              Talk to Us
            </h2>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <IoMdMail />
                </span>
                info@triumphholidays.com
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaWhatsapp />
                </span>
                +91 9677033863
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <HiPhoneMissedCall />
                </span>
                +91 9677033863
              </p>
            </div>
          </div>
          {/* 4 */}
          <div>
            <h2 className="text-[#FF5956] text-[16px] font-semi-bold py-4">
              Social
            </h2>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaFacebook />
                </span>
                Facebook
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaXTwitter />
                </span>
                Twitter
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaLink />
                </span>
                Linkedin
              </p>
              <p className="flex items-center gap-2 text-[#1e1e1e]">
                <span>
                  <FaYoutube />
                </span>
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* float image  */}
      <div className="fixed z-[99999] bottom-5 right-5 ">
        <Image
          src={"/assest/tour/arrow.png"}
          width={60}
          height={60}
          alt="img"
          className="transform transition-transform duration-500 hover:translate-x-2 hover:translate-y-2 cursor-pointer rounded-full "
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default Footer;

