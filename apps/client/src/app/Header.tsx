import { preah } from "@/components/fonts";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-lg:pr-5 pr-3 shadow-md dark:shadow-red-800">
      <Image
        className="object-cover"
        src={"/v-logo.png"}
        alt="vcrap-logo"
        height={25}
        width={60}
      />
      <ModeToggle />
    </div>
  );
};

export default Header;
