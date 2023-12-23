import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductTray = ({
  baseImg,
  avatar,
}: {
  baseImg: string;
  avatar: string;
}) => {
  return (
    <section className="flex-1 flex flex-col min-h-full border rounded-md">
      <div className="relative rounded-t-md group h-20 w-full flex items-end">
        <Image
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-all duration-200"
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
      <ScrollArea className="flex-1 flex-col gap-2 border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea>
    </section>
  );
};

export default ProductTray;
