"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import Link from "next/link";

// media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiX, BiMenuAltRight } from "react-icons/bi";
import Logo from "./Logo";
import { Dot } from "lucide-react";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);

    //remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className="z-50 bg-[#fec725]">
    <header
      className={`${
        header ? " shadow-md py-1" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 `}
    >
      <div className=" mx-auto flex flex-col md:flex-row md:items-center justify-between px-10 md:px-28 py-5 text-white bg-[#421709] -mt-4">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          {/* nav open menu */}
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? <BiX size={25} /> : <BiMenuAltRight size={25} />}
          </div>
        </div>
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 md:py-0 md:px-0 w-full mt-4 text-white rounded-lg"
              : "max-h-0 md:max-h-max "
          } flex flex-col z-50 w-full  gap-y-6 overflow-hidden font-bold md:font-medium md:flex-row md:w-max md:gap-x-8 md:h-max md:pb-0 transition-all duration-150 text-center md:text-left uppercase text-sm md:text-[15px] md:normal-case`}
        >
          <ScrollLink
            to="About"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer flex items-center justify-center"
          >
            About <Dot size={35} className="text-[#fec725]" />
          </ScrollLink>
          <ScrollLink
            to="menu"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer flex items-center justify-center"
          >
            Menu <Dot size={35} className="text-[#fec725]" />
          </ScrollLink>
          <ScrollLink
            to="Location"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer flex items-center justify-center"
          >
            Location <Dot size={35} className="text-[#fec725]" />
          </ScrollLink>
          <ScrollLink
            to="Seller"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
            className="scroll-smooth cursor-pointer flex items-center justify-center"
          >
            Seller <Dot size={35} className="text-[#fec725]" />
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
