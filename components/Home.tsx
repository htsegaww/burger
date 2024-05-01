import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Seller from "./Seller";
import Delivery from "./Delivery";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className=" bg-[#fec725]">
        <Navbar />
        <Hero />
      </div>
      <Seller />
      <Delivery />
    </div>
  );
};

export default Home;
