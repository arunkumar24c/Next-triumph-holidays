import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaStar } from "react-icons/fa";

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
            What Thailand Offers
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 py-10 gap-4">
          {tripsData.map((trip, index) => (
            <div key={index} className="flex flex-col shadow-md gap-4">
              <Image
                src={trip.imgSrc}
                width={400}
                height={250}
                className="w-full"
                alt="imgs"
              />
              <div className="px-4 py-5">
                <div className="flex justify-between gap-2">
                  <h1 className="text-[18px] text-[#3C3C3C] font-semibold ">
                    {trip.title}
                  </h1>
                </div>
                <p className="text-[14px] py-1 font-normal">
                  <span className="text-[#FF5956] text-[14px] font-medium">
                    {trip.duration}
                  </span>{" "}
                </p>
                <p className="text-[14px] font-medium leading-normal text-[#3c3c3c] pb-2">
                  {trip.description}
                </p>
                <div className="flex items-center gap-3">
                  <p className="flex gap-1 items-center">
                    <span>
                      <FaStar size={25} className="text-[#F1C40F]" />
                    </span>
                    4.6
                  </p>
                  <p className="font-light text-[#6C6C6C] text-[14px]">
                    ( 96 Reviews)
                  </p>
                </div>
                <div className="flex justify-center py-2">
                  <Link href="/details">
                    <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] ">
                      Explore
                    </button>
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
