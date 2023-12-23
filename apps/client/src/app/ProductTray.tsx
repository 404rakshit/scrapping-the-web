import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProductTray = ({
  baseImg,
  avatar,
}: {
  baseImg: string;
  avatar: string;
}) => {
  return (
    <section className="flex-1 min-h-full border gap-2 rounded-md">
      <div className="relative rounded-t-md group h-20 w-full flex items-end">
        <Image
          fill
          className="object-cover opacity-20 group-hover:scale-[1.02] transition-all duration-200"
          alt="amazon"
          loader={() => baseImg}
          src={baseImg}
        />

        {/* Avatar Area */}
        <div className="z-10">
          <Avatar className="lg:h-14 lg:w-14 translate-x-6 translate-y-4">
            <AvatarImage className="object-cover" src={avatar} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default ProductTray;
