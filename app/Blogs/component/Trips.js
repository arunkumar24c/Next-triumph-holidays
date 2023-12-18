import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

const tripsData = [
  {
    imgSrc: "/assest/trip/img1.png",
    title: "Amazing Australia",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "Amazing Australia",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "Amazing Australia",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",

    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
];

const Trips = () => {
  return (
    <div className="brand-container py-5">
      <div className="flex flex-col gap-6 justify-center items-center py-10">
        <div>
          <h2 className="text-[14px] text-center font-medium">Take a Look</h2>
          <h1 className="text-[40px] text-center font-bold text-black">
            Read out the Experience
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 py-10 gap-4">
          {tripsData.map((trip, index) => (
            <div key={index} className="flex flex-col gap-3 shadow-md bg-white">
              {/* left */}
              <div className="">
                <Image
                  src="/assest/blog/img1.png"
                  width={374}
                  height={225}
                  className="cursor-pointer w-full h-auto  "
                  alt="imgs"
                />
                <div className=" bg-[#FF5956BF]">
                  <p className="text-white text-center py-3">Explore Myself</p>
                </div>
              </div>
              {/* right */}
              <div>
                <p className="text-[#4B4B4B] px-1">
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  We denounce with righteous indignation who are so beguiled and
                  demoralized by the pleasure of the We denounce with brand d
                </p>
                <div className="bg-[#FFF2F1] flex justify-end">
                  <Link href="/Blog">
                    <p className=" py-3 px-3 flex text-[#F96768] items-center gap-1">
                      View blog{" "}
                      <IoIosArrowRoundForward className="text-[#F96768]" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;
