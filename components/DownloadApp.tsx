"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FadeIn } from "@/variants";

const DownloadApp = () => {
  return (
    <div className="hidden md:bg-[#fff1cb] md:w-full md:h-screen md:py-16 md:flex mx-auto items-center justify-center">
      <div className=" md:flex mx-auto items-center justify-center">
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Image src="/download/download.png" alt="" width="600" height={250} />
        </motion.div>
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-5xl w-[400px] font-bold">
            Get started with Favorite burger
          </h1>
          <Button className="bg-[#c53c2d] px-6 py-1 rounded-[20px] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] w-28">
            Get app
          </Button>

          <div className="flex">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="40"
              height="40"
              className="rounded-full object-cover border h-10 w-10 "
            />
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="40"
              height="40"
              className="rounded-full object-cover border h-10 w-10 -ml-3"
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="40"
              height="40"
              className="rounded-full object-cover border h-10 w-10 -ml-3"
            />
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="40"
              height="40"
              className="rounded-full object-cover border h-10 w-10 -ml-3 "
            />
            <Image
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=3332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="40"
              height="40"
              className="rounded-full object-cover border h-10 w-10 -ml-3"
            />

            <Button className="bg-[#c53c2d] rounded-full -ml-3">1M</Button>
          </div>

          <p className="font-bold text-2xl">Download our mobile app</p>
          <div className="flex items-center justify-center -mt-20">
            <Image
              src="/download/app-store.png"
              alt=""
              width="200"
              height="40"
            />
            <Image src="/download/google.png" alt="" width="260" height="40" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadApp;
