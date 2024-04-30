import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Seller from "./Seller";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#fec725]">
        <Navbar />
        <Hero />
      </div>
      <Seller />
    </div>
  );
};

export default Home;
