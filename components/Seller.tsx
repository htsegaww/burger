"use client";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import StarComponent from "./Star";
import { motion } from "framer-motion";
import { FadeIn } from "@/variants";

const Seller = () => {
  return (
    <motion.div
      // variants={FadeIn("left", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.6 }}
      className="bg-[#fff1cb] w-full h-full md:h-screen mx-auto py-20 relative"
      id="Seller"
    >
      <h1 className="font-bold text-center text-4xl py-10">OUR BEST SELLER</h1>

      <div className="flex md:flex-row flex-col items-center justify-center gap-2 ">
        {/* the first */}
        <div className=" h-[400px] w-[200px] flex flex-col items-center justify-center">
          <Heart className="text-[#c13425] -mb-2 -ml-28" />
          <Image src="/seller/swagBurger.png" alt="" width="150" height="200" />
          <div className="flex flex-col w-[300px] items-center justify-center  gap-2">
            <p className="font-bold">Swag Burger</p>
            <div>
              <StarComponent />
            </div>
            <p className="font-bold">$70.99</p>
            <Button className="text-[#c13425] -px-4 font-bold text-md w-full">
              Add to cart
              <ChevronRight className="" />
              <ChevronRight className="opacity-40 -ml-4" />
              <ChevronRight className="opacity-40 -ml-4" />
            </Button>
          </div>
        </div>
        {/* the second */}
        <div className=" h-[400px] w-[200px] flex flex-col items-center justify-center bg-[#421709] text-white rounded-3xl">
          <Heart className="text-[#fec725] -mb-2 -ml-28" fill="#fec725" />
          <Image src="/seller/swagBurger.png" alt="" width="150" height="200" />
          <div className="flex flex-col w-[300px] items-center justify-center  gap-2">
            <p className="font-bold">Swag Burger</p>
            <div>
              <StarComponent />
            </div>
            <p className="font-bold">$70.99</p>
            <Button className=" -px-4 font-bold text-md w-full text-[#fec725]">
              Add to cart
              <ChevronRight className="" />
              <ChevronRight className="opacity-40 -ml-4" />
              <ChevronRight className="opacity-40 -ml-4" />
            </Button>
          </div>
        </div>
        {/* the third */}
        <div className=" h-[400px] w-[200px] flex flex-col items-center justify-center">
          <Heart className="text-[#c13425] -mb-2 -ml-28" />
          <Image src="/seller/swagBurger.png" alt="" width="150" height="200" />
          <div className="flex flex-col w-[300px] items-center justify-center  gap-2">
            <p className="font-bold">Swag Burger</p>
            <div>
              <StarComponent />
            </div>
            <p className="font-bold">$70.99</p>
            <Button className="text-[#c13425] -px-4 font-bold text-md w-full">
              Add to cart
              <ChevronRight className="" />
              <ChevronRight className="opacity-40 -ml-4" />
              <ChevronRight className="opacity-40 -ml-4" />
            </Button>
          </div>
        </div>
        {/* the fourth */}
        <div className=" h-[400px] w-[200px] flex flex-col items-center justify-center">
          <Heart className="text-[#c13425] -mb-2 -ml-28" />
          <Image src="/seller/swagBurger.png" alt="" width="150" height="200" />
          <div className="flex flex-col w-[300px] items-center justify-center  gap-2">
            <p className="font-bold">Swag Burger</p>
            <div>
              <StarComponent />
            </div>
            <p className="font-bold">$70.99</p>
            <Button className="text-[#c13425] -px-4 font-bold text-md w-full">
              Add to cart
              <ChevronRight className="" />
              <ChevronRight className="opacity-40 -ml-4" />
              <ChevronRight className="opacity-40 -ml-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden absolute md:top-[50%] md:right-[20%] h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
        <ChevronRight />
      </div>
      <div className="hidden absolute md:top-[50%] md:left-[20%] h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
        <ChevronLeft />
      </div>
    </motion.div>
  );
};

export default Seller;
