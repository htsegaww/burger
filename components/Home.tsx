import React from "react";

import Hero from "./Hero";
import Seller from "./Seller";
import Delivery from "./Delivery";
import DownloadApp from "./DownloadApp";
import Welcome from "./Welcome";
import PopularMenu from "./PopularMenu";
import Location from "./Location";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
// import BackToTopBtn from "./BackToTopBtn";

const Home = () => {
  return (
    <div className=" max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Delivery />
      <DownloadApp />
      <Welcome />
      <PopularMenu />
      <Location />
      <Seller />
      <Footer />
      {/* <BackToTopBtn /> */}
    </div>
  );
};

export default Home;
