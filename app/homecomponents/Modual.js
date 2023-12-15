"use client"
import React, { useState } from "react";
import {  IoMdClose } from "react-icons/io";

const Modual = ({ closeModal }) => {
 const [selectedCountry, setSelectedCountry] = useState("");
 const [selectedState, setSelectedState] = useState("");
 const [selectedCity, setSelectedCity] = useState("");

 const handleCountryChange = (e) => {
   setSelectedCountry(e.target.value);
   
 };

 const handleStateChange = (e) => {
   setSelectedState(e.target.value);
 
 };

 const handleCityChange = (e) => {
   setSelectedCity(e.target.value);
 };

  return (
    <div className="fixed inset-0 top-[60px] left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-md">
        <>
          <div className="relative px-2 bg-[#FF5956]">
            <div className="flex justify-between items-center text-center text-white px-5 py-4">
              <h2 className="text-[14px] font-semibold text-center ">
                Location Details
              </h2>
              <p
                className="text-end absolute right-4 top-4 text-white cursor-pointer"
                onClick={closeModal}
              >
                <IoMdClose />
              </p>
            </div>
          </div>

          <p className="text-[#6c6c6c] text-[14px]  px-5 py-1 pt-5">
            Starting Point
          </p>
          <div className="flex flex-wrap justify-between gap-5 px-5 py-1">
            {/* Country  */}
            <div className="flex justify-between gap-2 items-center border px-2 pl-5 py-2">
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="outline-none"
              >
                <option value="">-- Select Country --</option>

                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
              </select>
            </div>

            {/* State  */}
            <div className="flex gap-2 justify-between items-center border px-2 pl-5 py-2">
              <select
                value={selectedState}
                onChange={handleStateChange}
                className="outline-none"
              >
                <option value="">-- Select State --</option>

                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
            </div>

            {/* City  */}
            <div className="flex gap-2 items-center justify-between border px-2 pl-5 py-2 ">
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="outline-none"
              >
                <option value="">-- Select City --</option>

                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center py-5">
            <button className="text-[white] bg-[#FF5956] px-16 py-3">
              Apply
            </button>
          </div>
        </>
      </div>
    </div>
  );
};



export default Modual;
