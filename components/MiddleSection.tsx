import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

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
const MiddleSection = () => {
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
    <div className="h-[700px] w-[400px] bg-gradient-to-b from-[#fec725] via-yellow-100 to-[#fec725] mt-[600px]">
      <div className=" flex items-center justify-center flex-col gap-3">
        {/* images */}
        <div className="flex flex-col items-center justify-center mt-3">
          <Image src="/images/top.png" alt="" width="60" height="100" />
          <Image src="/images/cheese.png" alt="" width="60" height="100" />
          <Image src="/images/beef.png" alt="" width="60" height="100" />
          <Image src="/images/onion.png" alt="" width="60" height="100" />
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
              <Image src="/icons/broccoli.png" alt="" width="15" height="15" />
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
        <div className="flex flex-col w-80 justify-center items-center -mt-6">
          <Image src="/images/bottom.png" alt="" width="60" height="100" />
          <Image src="/images/rosemery.png" alt="" width="60" height="100" />
        </div>
        <Button className="bg-[#c53c2d] rounded-[20px] shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]">
          Confirm Burger $65
        </Button>
      </div>
    </div>
  );
};

export default MiddleSection;
