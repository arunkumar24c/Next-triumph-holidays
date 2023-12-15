import Image from 'next/image';
import React from 'react'

const Client = () => {
  return (
    <div>
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div>
            <h2 className="text-[14px] text-center font-medium">
              Happy Clients Around
            </h2>
            <h1 className="text-[40px] text-center font-bold text-black">
              Our Happy Clients
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4  w-full">
            {/* 1 */}
            <div className="relative shadow-md">
              <Image
                width={300}
                height={700}
                className="w-full"
                src={"/assest/tour/image.png"}
              />
              <div className="bg-[#FF5956BF] absolute bottom-0 px-5 py-5 w-full flex justify-center items-center flex-col">
                <h1 className="text-[#E8FF5B] text-[30px] font-medium">
                  Merlin Manro
                </h1>
                <p className="text-[14px] font-normal italic text-white">
                  Designer
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="relative shadow-md">
              <Image
                width={300}
                height={700}
                className="w-full"
                src={"/assest/tour/image.png"}
              />
              <div className="bg-[#FF5956BF] absolute bottom-0 px-5 py-5 w-full flex justify-center items-center flex-col">
                <h1 className="text-[#E8FF5B] text-[30px] font-medium">
                  Merlin Manro
                </h1>
                <p className="text-[14px] font-normal italic text-white">
                  Designer
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="relative shadow-md">
              <Image
                width={300}
                height={700}
                className="w-full"
                src={"/assest/tour/image.png"}
              />
              <div className="bg-[#FF5956BF] absolute bottom-0 px-5 py-5 w-full flex justify-center items-center flex-col">
                <h1 className="text-[#E8FF5B] text-[30px] font-medium">
                  Merlin Manro
                </h1>
                <p className="text-[14px] font-normal italic text-white">
                  Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client