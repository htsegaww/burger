import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className=" ">
      <div>
        {/* logo */}
        <Image src="/logo/burger.png" alt="logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default Logo;
