// "use client";

// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import { Link as ScrollLink } from "react-scroll";
// import { Button } from "./ui/button";
// // import { useMediaQuery } from "react-responsive";

// const Header = () => {
//   const [header, setHeader] = useState(false);
//   const [nav, setNav] = useState(false);

//   const desktopMode = useMediaQuery({
//     query: "(min-width:1300px)",
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setHeader(true);
//       } else {
//         setHeader(false);
//       }
//     };

//     //add event listener
//     window.addEventListener("scroll", handleScroll);

//     //remove event listener
//     return () => window.addEventListener("scroll", handleScroll);
//   });
//   return (
//     <header className="fixed w-full flex justify-between  z-50">
//       <div>
//         <Logo />
//       </div>
//       <nav
//         // className="flex gap-4 text-white"
//         className={`${
//           nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
//         } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
//       >
//         <ScrollLink
//           to="PopularMenu"
//           activeClass="active"
//           spy={true}
//           // smooth={desktopMode}
//           className="scroll-smooth cursor-pointer font-bold"
//         >
//           Menu
//         </ScrollLink>
//         <ScrollLink
//           to="Seller"
//           activeClass="active"
//           spy={true}
//           // smooth={desktopMode}
//           className="scroll-smooth cursor-pointer font-bold"
//         >
//           Seller
//         </ScrollLink>
//         <ScrollLink
//           to="Location"
//           activeClass="active"
//           spy={true}
//           // smooth={desktopMode}
//           className="scroll-smooth cursor-pointer font-bold"
//         >
//           Location
//         </ScrollLink>
//       </nav>
//       <div className="flex gap-3 items-center justify-center">
//         {/* <span className="bg-[#9db04e] h-10 w-10 flex items-center justify-center rounded-full text-white text-sm">
//             10
//           </span> */}
//         <Button className="bg-[#fbf4df] px-5 text-black border rounded-[20px] uppercase shadow-[5px_5px_rgba(0,_0,_0,_0.9),_10px_10px_rgba(0,_0,_0,_0)]">
//           Menu
//         </Button>
//       </div>
//     </header>
//   );
// };

// export default Header;
// function useMediaQuery(arg0: { query: string }) {
//   throw new Error("Function not implemented.");
// }
