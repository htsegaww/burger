import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Seller from "./Seller";
import Delivery from "./Delivery";
import DownloadApp from "./DownloadApp";
import Welcome from "./Welcome";
import PopularMenu from "./PopularMenu";
import Location from "./Location";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className=" bg-[#fec725]">
        <Navbar />
        <Hero />
      </div>
      <Seller />
      <Delivery />
      <DownloadApp />
      <Welcome />
      <PopularMenu />
      <Location />
    </div>
  );
};

export default Home;
