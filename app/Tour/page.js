import React from "react";
import Hero from "./component/Hero";
import Trips from "./component/Trips";
import Client from "./component/Client";
import Newsletter from "./component/Newsletter";
import Triumph from "./component/Triumph";
import Offer from "./component/Offer";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Offer />
      <Trips />
      <Client />

      <Newsletter />
      <Triumph />
    </div>
  );
};

export default page;
