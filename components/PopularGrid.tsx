import Image from "next/image";
import React from "react";
import StarComponent from "./Star";
import { Button } from "./ui/button";
import { ChevronRight, Heart } from "lucide-react";

const popular = [
  {
    name: "Hamburger",
    star: <StarComponent />,
    price: 80.8,
    imageSrc: "/popular/burger.png",
    width: 120,
  },
  {
    name: "French Fries",
    star: <StarComponent />,
    price: 40.99,
    imageSrc: "/popular/fries.png",
    width: 120,
  },
  {
    name: "Pizza",
    star: <StarComponent />,
    price: 70.99,
    imageSrc: "/popular/pizza.png",
    width: 120,
  },
  {
    name: "Sandwich",
    star: <StarComponent />,
    price: 70.8,
    imageSrc: "/popular/sandwich.png",
    width: 140,
  },
  {
    name: "Hot Dog",
    star: <StarComponent />,
    price: 30.8,
    imageSrc: "/popular/hotdog.png",
    width: 120,
  },
  {
    name: "Taco",
    star: <StarComponent />,
    price: 10.8,
    imageSrc: "/popular/taco.png",
    width: 100,
  },
];
const PopularGrid = () => {
  return (
    <div className="w-[900px] h-full grid grid-cols-1 md:grid-cols-3 gap-14 md:mx-auto py-20">
      {popular.map((menu) => {
        return (
          <div
            key={menu.name}
            className="bg-[#421709] w-[280px] h-[150px] rounded-2xl flex items-center justify-center gap-16 mx-auto relative"
          >
            <div>
              <Image
                src={menu.imageSrc}
                alt=""
                width={menu.width}
                height={75}
                className="object-cover absolute top-9 -left-10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white font-bold text-xl">{menu.name}</p>
              <StarComponent />
              <p className="text-white font-bold">${menu.price}</p>
              <Button className="text-[#fece27] font-bold text-start -px-4 py-2">
                Add to cart
                <ChevronRight className="" />
                <ChevronRight className="opacity-40 -ml-4" />
                <ChevronRight className="opacity-40 -ml-4" />
                <Heart className="text-[#fece27] " />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularGrid;
