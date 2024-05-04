"use client";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Star,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import hero from "@/public/hero/hero.png";
import { motion } from "framer-motion";
import { FadeIn } from "@/variants";

const carouselItem = [
  {
    name: "tomatos",
    image: "/carousel/tomato.png",
  },
  {
    name: "onion",
    image: "/carousel/onion.png",
  },
  {
    name: "lettuce",
    image: "/carousel/lettuce.png",
  },
  {
    name: "pickles",
    image: "/carousel/pickles.png",
  },
];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(carouselItem[0]);

  const nextSlide = () => {
    const currentIndex = carouselItem.indexOf(currentImage);
    setCurrentImage(carouselItem[(currentIndex + 1) % carouselItem.length]);
  };

  const prevSlide = () => {
    const currentIndex = carouselItem.indexOf(currentImage);
    setCurrentImage(
      carouselItem[
        (currentIndex - 1 + carouselItem.length) % carouselItem.length
      ]
    );
  };

  return (
    <div
      className="flex md:gap-[300px] md:h-screen flex-col lg:flex-row lg:justify-between justify-center items-center w-full py-28 overflow-hidden"
      id="Hero"
    >
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col w-[400px]"
      >
        <motion.h1 className="text-5xl w-full md:text-start text-center md:w-[450px] md:ml-36 font-extrabold mt-12">
          Make your burger 🍔 and order
        </motion.h1>
        <Image
          // src="/hero/hero.png"
          src={hero}
          alt=""
          // width="450"
          // height="389"
          className=" md:-mt-36 w-[640px] h-[640px] md:w-[700px] md:h-[700px] object-cover -mt-32 md:ml-36"
        />
      </motion.div>

      {/* middle section */}
      <motion.div
        variants={FadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="h-[700px] w-[400px] bg-gradient-to-b from-[#fec725] via-yellow-100 to-[#fec725] mt-5 md:mt-0"
      >
        <div className=" flex items-center justify-center flex-col gap-3">
          {/* images */}
          <div className="flex flex-col items-center justify-center mt-3">
            <Image src="/images/top.png" alt="" width="80" height="80" />
            <Image src="/images/cheese.png" alt="" width="80" height="80" />
            <Image src="/images/beef.png" alt="" width="80" height="80" />
            <Image src="/images/onion.png" alt="" width="80" height="80" />
          </div>

          {/* middle box */}
          <div className="h-56 w-56 bg-[#fffcf1] rounded-xl py-3 relative">
            <div className="bg-white flex justify-evenly p-2 mx-3 rounded-xl ">
              <div className="border rounded-full h-6 w-6 flex items-center justify-center">
                <Check className=" h-5 w-5 text-[#9db04e]" />
              </div>
              <div className="border rounded-full bg-[#421709] h-6 w-6 flex items-center justify-center">
                <ChevronUp className="h-5 w-5  text-white" />
              </div>
              <div className="border rounded-full bg-[#421709] h-6 w-6 flex items-center justify-center">
                <ChevronDown className="h-5 w-5 text-white  " />
              </div>
              <Trash2 className="h-5 w-5 rounded-full text-red-700" />
            </div>

            {/* carousel */}
            <div className="relative">
              <div className="overflow-hidden flex flex-col items-center justify-center mx-auto gap-y-4">
                <Image
                  src={currentImage.image}
                  alt=""
                  width="80"
                  height="80"
                  className="object-contain absolute top-9"
                />

                <p className="absolute top-24 text-[#421709] font-bold uppercase text-sm">
                  {currentImage.name}
                </p>
              </div>

              <ChevronsLeft
                onClick={prevSlide}
                className="absolute top-10 left-2 h-8 w-8 cursor-pointer opacity-45 hover:opacity-100 transition-all ease-in-out duration-300"
              />

              <ChevronsRight
                onClick={nextSlide}
                className="absolute top-10 right-2 h-8 w-8 cursor-pointer opacity-45 hover:opacity-100 transition-all ease-in-out duration-300"
              />
            </div>

            <div className="flex absolute bottom-1 py-1 items-center justify-center gap-3 mx-1">
              <div className="border rounded-full w-8 h-8 relative flex items-center justify-center bg-red-300 cursor-pointer ">
                <Image src="/icons/cheese.png" alt="" width="15" height="15" />

                <Plus
                  size={15}
                  className="flex absolute items-center text-white justify-center  border rounded-full bg-[#421709] -top-1 -right-1"
                />
              </div>
              <div className="border rounded-full w-8 h-8 relative flex items-center justify-center bg-white cursor-pointer">
                <Plus
                  size={15}
                  className="flex absolute items-center text-white justify-center  border rounded-full bg-[#421709] -top-1 -right-1"
                />
                <Image
                  src="/icons/broccoli.png"
                  alt=""
                  width="15"
                  height="15"
                />
              </div>
              <div className="border rounded-full w-8 h-8 relative flex items-center justify-center bg-white cursor-pointer">
                <Plus
                  size={15}
                  className="flex absolute items-center text-white justify-center  border rounded-full bg-[#421709] -top-1 -right-1"
                />
                <Image src="/icons/carrot.png" alt="" width="15" height="15" />
              </div>
              <div className="border rounded-full w-8 h-8 relative flex items-center justify-center bg-white cursor-pointer">
                <Plus
                  size={15}
                  className="flex absolute items-center text-white justify-center  border rounded-full bg-[#421709] -top-1 -right-1"
                />
                <Image src="/icons/lettuce.png" alt="" width="15" height="15" />
              </div>
              <div className="border rounded-full w-8 h-8 relative  flex items-center justify-center bg-white cursor-pointer">
                <Plus
                  size={15}
                  className="flex absolute items-center text-white justify-center  border rounded-full bg-[#421709] -top-1 -right-1"
                />
                <Image src="/icons/onion.png" alt="" width="15" height="15" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-80 justify-center items-center -mt-10">
            <Image src="/images/bottom.png" alt="" width="80" height="80" />
            <Image src="/images/rosemery.png" alt="" width="80" height="80" />
          </div>
          <Button className="bg-[#c53c2d] rounded-[20px] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]">
            Confirm Burger $65
          </Button>
        </div>
      </motion.div>
      {/*  */}

      <motion.div
        variants={FadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="hidden md:hidden lg:flex flex-col md:w-full lg:w-[400px] items-center mr-28 gap-y-10 mx-auto"
      >
        <Image
          src="/burger.png"
          alt=""
          width={820}
          height={200}
          className=" object-contain"
        />

        <div className="flex items-center">
          <Star fill="#c53c2d" size={70} className="transform rotate-180 " />
          <p className="text-4xl md:text-xl font-bold text-center w-full">
            Our Special Favorite Burger
          </p>
        </div>

        <div>
          <p className="font-bold text-5xl">145M</p>
          <p className="font-bold">Order complete</p>
        </div>
        <div>
          <p className="text-5xl font-bold">1M</p>
          <p className="font-bold">Customer</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
