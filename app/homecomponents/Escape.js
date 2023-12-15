import Image from "next/image";
import React from "react";

const places = [
  {
    imgSrc: "/assest/escape/img1.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
  {
    imgSrc: "/assest/escape/img2.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
  {
    imgSrc: "/assest/escape/img3.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
  {
    imgSrc: "/assest/escape/img4.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
  {
    imgSrc: "/assest/escape/img5.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
  {
    imgSrc: "/assest/escape/img6.png",
    name: "Thailand",
    description: "Ever fascinating, has endless things to do.",
    para: "But you cannot miss these.",
  },
];

const Escape = () => {
  return (
    <div className="brand-container py-10 px-5 relative">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div>
          <h2 className="text-[14px] text-center text-[#000000] font-medium">
            Find your{" "}
          </h2>
          <h1 className="text-[40px] text-black font-bold leading-normal text-center">
            Best Escape Place
          </h1>
        </div>
        <div className="py-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          {places.map((place, index) => (
            <div key={index} className="relative ">
              <div className="cursor-pointer ">
                <Image
                  src={place.imgSrc}
                  width={400}
                  height={400}
                  className="h-[380px] "
                  alt="#"
                />
              </div>
              <div className="absolute hover:bg-[#FF5956BF] w-full h-[380px] top-[0rem] px-2 py-16 flex flex-col items-center justify-center gap-2 opacity-0 hover:opacity-100  transition-opacity duration-300 cursor-pointer">
                <h1 className="text-[#E8FF5B] font-medium text-[18px]">
                  {place.name}
                </h1>
                <p className="text-white">{place.description}</p>
                <p className="text-white">{place.para}</p>
                <div>
                  <button className="px-5 py-2 font-medium text-[14px] bg-white text-[#FF5956] rounded-md">
                    Book now!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-z-50 absolute  top-[10rem] -left-[12rem] rotate-180 xl:block lg:block hidden ">
        <Image
          src={"/assest/animate/plan.png"}
          width={300}
          height={300}
          alt="img"
          className="animate-spin-half-and-back "
        />
      </div>
    </div>
  );
};

export default Escape;
