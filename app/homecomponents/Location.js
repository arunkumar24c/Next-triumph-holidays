import Image from "next/image";
import React from "react";

const tripsData = [
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
  {
    imgSrc: "/assest/trip/img1.png",
    title: "India Beautiful Places",
    price: "$442 Only",
    duration: "5 Days 4 Night",
    description:
      "Lorem ipsum dolor sit amet, quis int nostrum quis int nostrum sit amit stad.....",
  },
];

const Location = () => {
  return (
    <div className="brand-container py-5">
      <div className="flex flex-col gap-6 justify-center items-center py-10">
        <div>
          <h2 className="text-[14px] text-center font-medium">Take a Look</h2>
          <h1 className="text-[40px] text-center font-bold text-black">
            Featured trips
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
                  <p className="bg-[#FFF2F1] text-[18px] text-[#FF5956] font-medium px-2 py-2 rounded-s-md">
                    {trip.price}
                  </p>
                </div>
                <p className="text-[14px] font-normal">
                  <span className="text-[14px] font-medium">
                    {trip.duration}
                  </span>{" "}
                  Travel Trip
                </p>
                <p className="text-[14px] font-medium leading-normal text-[#3c3c3c]">
                  {trip.description}
                </p>
                <div className="flex justify-center py-2">
                  <button className="px-11 py-4 font-medium text-[14px] text-white bg-[#FF5956] rounded-md">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
