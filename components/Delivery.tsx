"use client";
import { FadeIn } from "@/variants";
import { motion } from "framer-motion";
import { Cog, Truck } from "lucide-react";
import Image from "next/image";

const Delivery = () => {
  return (
    <motion.div
      variants={FadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="w-full bg-[#421709]"
    >
      <div className="w-full md:h-screen h-full flex md:flex-row flex-col mx-auto items-center md:items-start justify-center gap-14 py-28">
        <motion.div
          variants={FadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Image src="/delivery/delivery.png" alt="" width="350" height={350} />
        </motion.div>
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col gap-3"
        >
          <Image src="/delivery/burger-1.png" width="100" height={350} alt="" />
          <Image
            src="/delivery/sandwitch.png"
            width="100"
            height={350}
            alt=""
          />
          <Image
            src="/delivery/sandwitch-2.png"
            width="100"
            height={350}
            alt=""
          />
        </motion.div>

        {/* the  delivery cog */}
        <motion.div
          variants={FadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col  "
        >
          <h1 className="text-white md:text-start text-center text-5xl md:w-[500px] w-[400px] font-bold">
            The fastest food delivery in town
          </h1>

          <div className="flex gap-5 mt-10">
            <div className="h-14 w-14 rounded-full border flex items-center justify-center bg-[#fff1cb]">
              <Truck size={30} />
            </div>
            <div>
              <h1 className="text-[#ffcc26] font-bold text-3xl">
                Air Delivery
              </h1>
              <p className="text-white">Faster at the minimum cost.</p>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <div className="h-14 w-14 rounded-full border flex items-center justify-center bg-[#fff1cb]">
              <Cog size={30} />
            </div>
            <div>
              <h1 className="text-[#ffcc26] font-bold text-3xl">Automated</h1>
              <p className="text-white">
                We process food based on an AI management system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Delivery;
