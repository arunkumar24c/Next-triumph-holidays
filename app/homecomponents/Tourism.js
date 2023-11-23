"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Tourism = () => {
  const tripsData = [
    {
      imgSrc: "/assest/trip/img3.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img2.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img5.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img5.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img5.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img2.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img1.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
    {
      imgSrc: "/assest/trip/img5.png",
      title: "Venice",
      description:
        'Venice, known as the "City of Canals," captivates with its romantic waterways',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    const lastIndex = tripsData.length - 1;
    const newIndex = currentIndex + itemsPerPage;
    setCurrentIndex(newIndex <= lastIndex ? newIndex : 0);
  };

  const prevSlide = () => {
    const lastIndex = tripsData.length - 1;
    const newIndex = currentIndex - itemsPerPage;
    setCurrentIndex(
      newIndex >= 0 ? newIndex : lastIndex - (lastIndex % itemsPerPage)
    );
  };
  return (
    <div className="my-10">
      <div className="brand-container relative py-5 ">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-[14px] font-medium ">GLOBAL TOURISM</h2>
          <h1 className="font-bold text-[40px]">
            Discover tourism on a global scale.
          </h1>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-[#FF5956] text-[#FFF2F1] ">
              Domestic Tours
            </button>
            <button className="px-6 py-2 rounded-full bg-[#FFF2F1] text-[#FF5956] border border-[#FF5956] ">
              International Tours
            </button>
          </div>
          {/* container */}
          <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row py-10 gap-5 ">
            {/* left */}
            <div
              className="w-full xl:w-1/2 md:w-full lg:w-1/2  items-end flex  "
              style={{
                backgroundImage: 'url("/assest/trip/bg1.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col  py-6 px-5   gap-4">
                <h1 className="text-white text-[30px] font-medium">
                  Tokyo Adventure
                </h1>
                <p className="text-white text-[16px] font-extralight leading-normal">
                  Ever-fascinating Tokyo has endless things to do. But you{" "}
                  <br />
                  can&apos;t miss these.
                </p>
                <div>
                  {" "}
                  <button className="px-5 py-2 font-semibold text-[14px] text-white bg-[#FF5956] rounded-md">
                    Book now !{" "}
                  </button>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex w-full xl:w-1/2 md:w-full lg:w-1/2 flex-col items-center">
              <div className=" ">
                <div className="flex flex-col pr-5 gap-11">
                  {tripsData
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((trip, index) => (
                      <div key={index} className="flex shadow-md">
                        <Image
                          src={trip.imgSrc}
                          width={150}
                          height={160}
                          alt="img"
                          className=" w-[150px]"
                        />
                        <div className="bg-[#FFF2F1] p-4">
                          <h2 className="text-[#4b4b4b] text-[14px]">
                            {trip.title}
                          </h2>
                          <p className="text-[20px] font-medium text-[#121212] leading-normal">
                            {trip.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-z-50 absolute  -bottom-[12rem] -left-[12rem] hidden xl:block lg:block">
          <Image
            src={"/assest/animate/plan.png"}
            width={300}
            height={300}
            alt="img"
            className="animate-spin-half-and-backs "
          />
        </div>
        <div className="flex justify-end ">
          <button
            onClick={prevSlide}
            className="mx-2  bg-[#FFF2F1] text-[#FF5956] shadow-lg px-5 py-5 rounded-full  "
          >
            <GoArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="mx-2  bg-[#FF5956] text-[white] shadow-lg px-5 py-5 rounded-full  "
          >
            <GoArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tourism;
