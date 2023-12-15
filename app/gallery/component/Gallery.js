import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Gallery = () => {
   const images = [
     { id: 1, path: "/assest/tour/5.png" },
     { id: 2, path: "/assest/tour/5.png" },
     { id: 3, path: "/assest/tour/5.png" },
     { id: 4, path: "/assest/tour/5.png" },
     { id: 5, path: "/assest/tour/5.png" },
     { id: 6, path: "/assest/tour/5.png" },
     { id: 7, path: "/assest/tour/5.png" },
     { id: 8, path: "/assest/tour/5.png" },
     { id: 9, path: "/assest/tour/5.png" },
   ];

  return (
    <div className="relative overflow-hidden">
      <div className="brand-container py-10 px-5">
        <div className="">
          <div className="flex justify-end">
            <Link href="/Blog">
              {" "}
              <button className="text-[18px] font-medium bg-[#FF5956] text-white py-3 px-4 my-8 flex gap-2 items-center">
                {" "}
                <span>
                  <FaLongArrowAltLeft />
                </span>{" "}
                Back
              </button>
            </Link>
          </div>
          {/* xl screeen */}
          <div className="hidden xl:block">
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pt-16 pb-10 relative  ">
              {/* 1st */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              {/* 2 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className="xl:absolute xl:top-0"
                />
              </div>
              {/* 3 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
            </div>
            {/* 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pb-10  relative  ">
              {/* 1st */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              {/* 2 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className="xl:absolute xl:-top-[5.75rem]"
                />
              </div>
              {/* 3 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
            </div>
            {/* 3red */}
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pb-10 relative  ">
              {/* 1st */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              {/* 2 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className="xl:absolute xl:-top-[5.75rem]"
                />
              </div>
              {/* 3 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
            </div>
            {/* 4th */}
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pb-10 relative  ">
              {/* 1st */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              {/* 2 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className="xl:absolute xl:-top-[5.75rem]"
                />
              </div>
              {/* 3 */}
              <div>
                <Image
                  src={"/assest/tour/5.png"}
                  width={400}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
            </div>
            {/* xl end */}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pb-10 xl:hidden w-full">
            {images.map((image) => (
              <div key={image.id} className="relative overflow-hidden group ">
                <div className="transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105">
                  {" "}
                  <Image
                    src={image.path}
                    width={400}
                    height={400}
                    alt=""
                    className="w-full "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="-z-50 absolute  -top-[2rem] -right-[14rem] xl:block lg:block hidden ">
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

export default Gallery;
