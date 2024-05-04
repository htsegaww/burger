"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopularGrid from "./PopularGrid";
import { motion } from "framer-motion";
import { FadeIn } from "@/variants";

const PopularMenu = () => {
  return (
    <div
      className="bg-[#fff1cb] w-full h-full md:h-screen py-32 mx-auto flex flex-col items-center gap-10"
      id="menu"
    >
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex items-center justify-between px-10 gap-10"
      >
        <h1 className="font-bold text-2xl md:text-5xl uppercase ">
          Our popular menu
        </h1>
        <div className="flex gap-10">
          <div className="   hidden h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
            <ChevronLeft />
          </div>
          <div className=" hidden h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </motion.div>

      <motion.div className="">
        <PopularGrid />
      </motion.div>
    </div>
  );
};

export default PopularMenu;
