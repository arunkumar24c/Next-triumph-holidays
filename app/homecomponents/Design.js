"use client";
import React, { useState } from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GiEarthAsiaOceania, GiParachute } from "react-icons/gi";

const iconsData = [
  {
    icon: <GiParachute size={35} />,
    title: "13 + YEARS",
    titles: " EXPERTISE",
  },
  {
    icon: <GiEarthAsiaOceania size={35} />,
    title: "7,000 +",
    titles: " BOOKINGS",
  },
  {
    icon: <FaHandHoldingUsd size={35} />,
    title: "30,000 +",
    titles: " TRAVELLERS",
  },
  {
    icon: <GoPerson size={35} />,
    title: "150 +",
    titles: " DESTINATIONS",
  },
];

const Why = () => {
  const [hovered, setHovered] = useState(Array(iconsData.length).fill(false));

  const handleHover = (index) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = !updatedHovered[index];
    setHovered(updatedHovered);
  };

  return (
    <div className=" py-5 ">
      <div className="brand-container bg-[#FFF2F1] rounded-md">
        <div className="  grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 justify-center items-center  py-5">
          {iconsData.map((item, index) => (
            <div
              className="relative flex flex-col justify-center items-center"
              key={index}
            >
              <div
                className="flex flex-col border shadow-lg rounded-xl bg-[#FF5956] text-white cursor-pointer px-16 py-16 justify-center items-center overflow-hidden relative"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(index)}
                style={{ width: "fit-content", height: "fit-content" }}
              >
                {/* Icons */}
                <p
                  className={`absolute transition-all left-11 ${
                    hovered[index] ? "-top-[4rem]" : "top-11"
                  }`}
                >
                  {item.icon}
                </p>
                <p
                  className={`absolute transition-all left-11 ${
                    hovered[index] ? "top-11" : "top-[10rem]"
                  }`}
                >
                  {item.icon}
                </p>
              </div>
              {/* Title */}
              <h2 className="py-1 text-[18px] font-semibold text-[#3C3C3C]">
                {item.title}
              </h2>
              <h2 className="py-1 text-[18px] font-semibold text-[#3C3C3C]">
                {item.titles}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
