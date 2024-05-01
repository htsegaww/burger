import { Cog, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div className="w-full h-full bg-[#421709]">
      <div className="w-full flex md:flex-row flex-col items-center md:items-start justify-center gap-14 py-20">
        <div>
          <Image src="/delivery/delivery.png" alt="" width="350" height={350} />
        </div>
        <div className="flex flex-col gap-3">
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
        </div>

        {/* the  delivery cog */}
        <div className="flex flex-col  ">
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
        </div>
      </div>
    </div>
  );
};

export default Delivery;
