import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#FFF2F1]">
      <div className="brand-container ">
        <div className="flex flex-col justify-center items-center gap-5 py-10 ">
          <Image
            src={"/assest/blog/img4.png"}
            width={200}
            height={150}
            alt="img"
            className=""
          />
          <div>
            <h1 className="text-[40px] font-bold leading-normal text-center text-[#3c3c3c]">
              Sign up to our newsletter
            </h1>
            <p className="text-[16px] font-medium leading-normal text-center text-[#3c3c3c]">
              We&apos;ll send you exclusive offers and sneak peeks of our best
              deals,
            </p>
          </div>
          <div className="flex gap-2  px-10">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white xl:w-[700px] lg:w-[600px] md:[400px] w-full border border-[#cccccc] text-black px-4 py-3"
            />
            <button className="bg-[#F96768] text-[14px] px-5 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
