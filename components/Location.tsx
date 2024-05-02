import {
  ChevronLeft,
  ChevronRight,
  LocateIcon,
  LocateOffIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className="bg-[#fec725] w-full h-full py-20">
      <div>
        <h1 className="text-5xl font-bold text-center text-[#421709]">
          Location
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-evenly px-8 py-6 md:gap-2 gap-14">
        <div className="  hidden -mr-20 h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/location/indy.jpeg"
            alt=""
            width="200"
            height="200"
            className="h-[200px] w-[200px] object-cover rounded-full shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]"
          />

          <p className="font-bold text-xl text-[#421709]">INDIANAPOLIS</p>
        </div>
        <div className="h-[200px] w-[200px] object-cover rounded-full shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]">
          <LocateIcon size={200} />
          <p className="font-bold text-xl text-[#cf5625] text-center py-5">
            Select your location
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/location/nyc.jpeg"
            alt=""
            width="200"
            height="200"
            className="h-[200px] w-[200px] object-cover rounded-full shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]"
          />
          <p className="font-bold text-xl text-[#421709]">NEW YORK</p>
        </div>
        <div className="  hidden -ml-20 h-10 w-10 border md:flex items-center justify-center rounded-full bg-[#fbf4df] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)] cursor-pointer">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Location;
