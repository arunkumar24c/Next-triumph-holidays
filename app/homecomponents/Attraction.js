"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Attraction = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Explore Indian Tourism", "Explore Indian Tourism"];
  const text = ["Explore Indian Tourism", "Explore Indian Tourism"];
  useEffect(() => {
    const typingEffect = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(typingEffect);
  }, [texts.length]);

  return (
    <div className="my-10 ">
      <div className="brand-container relative py-5 ">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-[14px] text-center font-medium ">
            GLOBAL TOURISM
          </h2>
          <h1 className="font-bold text-center text-[40px]">
            Discover tourism on a global scale.
          </h1>
        </div>
        <div className="bgs my-8">
          <div className="bg-[#FF5956BF] ">
            <div className="flex flex-col gap-5 justify-center items-center text-center py-16 ">
              <h1 className="text-[40px] w-full   font-bold text-[#f8f42e] relative inline-block overflow-hidden px-5">
                Explore Experience
              </h1>
              <p className="text-white">
                Your portal to extraordinary marvels around the globe.
              </p>
              <div>
                <Link href="/experiences">
                  <button className="rounded-full px-5 py-2 text-[#FF5956] bg-[#F8F42E]">
                    102 Tours
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bgs my-8">
          <div className="bg-[#FF5956BF] ">
            <div className="flex flex-col gap-5 justify-center items-center text-center py-16 ">
              <h1 className="text-[40px]  w-full  font-bold text-[#f8f42e] relative inline-block overflow-hidden px-5">
                Explore Attraction
              </h1>
              <p className="text-white">
                Discover the wonders of Indian tourism.
              </p>
              <div>
                <Link href="/attraction">
                  <button className="rounded-full px-5 py-2 text-[#FF5956] bg-[#F8F42E]">
                    25 Tours
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <button className="bg-[#FF5956] text-[white] px-5 py-3">
            Enquiry Now
          </button>
        </div> */}
      </div>
      {/* <div className="-z-50 absolute  top-[10rem] -right-[12rem] xl:block lg:block hidden ">
        <Image
          src={"/assest/animate/plan.png"}
          width={300}
          height={300}
          alt="img"
          className="animate-spin-half-and-back "
        />
      </div> */}
    </div>
  );
};

export default Attraction;
