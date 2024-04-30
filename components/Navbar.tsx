import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-4 md:px-36 mx-auto ">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <span className="bg-[#9db04e] h-10 w-10 flex items-center justify-center rounded-full text-white text-sm">
          10
        </span>
        <Button className="bg-[#fbf4df] px-5 text-black border rounded-[20px] uppercase shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]">
          Menu
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
