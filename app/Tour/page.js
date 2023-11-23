"use client"
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/en-gb"; 
import "react-moment";

const page = () => {
  const [showLeavingCalendar, setShowLeavingCalendar] = useState(false);
  const [showReturningCalendar, setShowReturningCalendar] = useState(false);
  const [leavingDate, setLeavingDate] = useState("2023-11-22");
  const [returningDate, setReturningDate] = useState("2023-11-25");
  const [formattedLeaving, setFormattedLeaving] = useState("");
  const [formattedReturning, setFormattedReturning] = useState("");
  const [leavingDay, setLeavingDay] = useState("");
  const [returningDay, setReturningDay] = useState("");

  const toggleLeavingCalendar = () => {
    setShowLeavingCalendar(!showLeavingCalendar);
    setShowReturningCalendar(false); // Close returning calendar when opening leaving calendar
  };

  const toggleReturningCalendar = () => {
    setShowReturningCalendar(!showReturningCalendar);
    setShowLeavingCalendar(false); // Close leaving calendar when opening returning calendar
  };

  const handleLeavingDateSelection = (date) => {
    setLeavingDate(date);
    toggleLeavingCalendar();
  };

  const handleReturningDateSelection = (date) => {
    setReturningDate(date);
    toggleReturningCalendar();
  };

  // ... (useEffect to format dates and days remains the same as in the previous code)

  return (
    <div className="bg-[#F5F5F5] m-4 shadow-md rounded-md">
      <div className="flex justify-between gap-5 p-5">
        <div onClick={toggleLeavingCalendar}>
          <p className="text-[#74747c] text-[14px]">{formattedLeaving}</p>
          <p className="text-[#74747c] text-[16px]">Leaving on {leavingDay}</p>
          {showLeavingCalendar && (
            // Calendar component or date picker for leaving date here
            // For simplicity, I'll display the selected leaving date
            <p>Selected Leaving Date: {leavingDate}</p>
          )}
        </div>

        <div onClick={toggleReturningCalendar} className="cursor-pointer">
          <p className="text-[#74747c] text-[14px]">
            Returning on {returningDay}
          </p>
          <p className="text-[#3c3c3c] text-[16px]">{formattedReturning}</p>
          {showReturningCalendar && (
            // Calendar component or date picker for returning date here
            // For simplicity, I'll display the selected returning date
            <p>Selected Returning Date: {returningDate}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
