"use client";
import React, { useState } from "react";
import { GiLightningStorm } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { LiaTreeSolid } from "react-icons/lia";

const iconsData = [
  {
    icon: <GiLightningStorm size={35} />,
    title: "24/7 Assistance",
  },
  {
    icon: <MdContacts size={35} />,
    title: "Expert Guidance",
  },
  {
    icon: <IoIosPricetags size={35} />,
    title: "Transparent Price",
  },
  {
    icon: <LiaTreeSolid size={35} />,
    title: "Custom Holidays",
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
    <div className="bg  py-10">
      <div className="brand-container flex flex-col justify-center items-center py-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-[#000000] text-[40px]">Why Triumph ?</h1>
          <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-between items-center gap-16 py-5">
            {iconsData.map((item, index) => (
              <div className="relative" key={index}>
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
                <h2 className="py-2 text-[18px] font-semibold text-[#3C3C3C]">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
