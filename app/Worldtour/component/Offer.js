import Image from 'next/image';
import React from 'react'

const Offer = () => {
  const TourData = [
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },

    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },
    {
      src: "/assest/tour/img.png",
      alt: "Germany",
      cities: "8 Cities",
      tourPlaces: "140+ Tour Places",
    },

  ];
  return (
    <div>
      <div className="brand-container px-5 py-10">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className='flex flex-col '>
            <h2 className='text-[14px] text-center font-medium '>Land on Different Countries</h2>
            <h1 className='text-[40px] text-center font-bold'>Countries We offer</h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 ">
            {TourData.map((tour, index) => (
              <div
                className="relative flex justify-center items-center"
                key={index}
              >
                <Image
                  src={tour.src}
                  width={270}
                  height={350}
                  className=""
                  alt={tour.alt}
                />
                <div className="absolute bottom-0 flex gap-2 justify-center items-center flex-col py-4">
                  <h2 className="text-[19px] font-semibold text-[white]">
                    {tour.alt}
                  </h2>
                  <p className="text-[14px] text-white font-medium">
                    {tour.cities}{" "}
                    <span className=" italic font-light">
                      {tour.tourPlaces}
                    </span>
                  </p>
                  <div>
                    <button className="bg-[#FF5956] text-white px-4 py-2">Book now!</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer