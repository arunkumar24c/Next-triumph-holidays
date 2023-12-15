import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const RegisterModal = ({ closeModal }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[350px] xl:w-[550px] lg:w-[550px] md:w-[450px] rounded-md">
        {submitted ? (
          <Thanks closeModal={closeModal} />
        ) : (
          <>
            <div className="relative px-2 bg-[#FF5956]">
              <div className="flex justify-center items-center text-center text-white px-16 py-4">
                <h2 className="text-[14px] font-semibold text-center ">
                  Enquire Now!
                </h2>
              </div>
              <p
                className="text-end absolute right-4 top-4 text-white cursor-pointer"
                onClick={closeModal}
              >
                <IoMdClose />
              </p>
            </div>

            <div className="">
              <div className="shadow-md border text-[#6C6C6C] bg-[#F9F9F9] px-5 py-5">
                <div className="px-5 py-5 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <div className="flex gap-4">
                    <select className="py-3 px-5 border">
                      <option value="+91">+91</option>
                      <option value="+91">+91</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full py-3 px-5 border text-[#6C6C6C]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Choose Date of Travel"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <input
                    type="text"
                    placeholder="Attendance"
                    className="w-full py-3 px-5 border text-[#6C6C6C]"
                  />
                  <textarea
                    placeholder="Note"
                    className="px-5 py-3 pb-8 border text-[#6C6C6C]"
                  ></textarea>
                </div>
                <div className="px-7 flex flex-col gap-2 py-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/assest/tour/tick.png"}
                      width={15}
                      height={15}
                      className=""
                      alt="img"
                    />
                    <p className="text-[12px] font-normal leading-normal ">
                      We assure the privacy of your contact data.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/assest/tour/tick.png"}
                      width={15}
                      height={15}
                      className=""
                      alt="img"
                    />
                    <p className="text-[12px] font-normal leading-normal ">
                      We assure the privacy of your contact data.
                    </p>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#FF5956] w-full py-3 text-white text-center"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};





const Thanks = ({ closeModal }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <Image
          src={"/assest/tour/map.png"}
          width={200}
          height={200}
          className=""
          alt="img"
        />
        <h1 className="text-[18px] font-medium ">
          {" "}
          Thank you for reaching out.
        </h1>
        <p className="text-[12px] text-[#9CA3AF]">
          A member of our team will be in touch with you soon!
        </p>
        {/* close button */}
        <button
          className="text-[white] bg-[#FF5956] px-5 py-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
