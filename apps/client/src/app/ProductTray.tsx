import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import ProductData from "./ProductData";

const ProductTray = ({
  baseImg,
  avatar,
  site,
}: {
  baseImg: string;
  avatar: string;
  site: "amazon" | "flipkart";
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
      <ScrollArea className="flex-1 border p-2">
        <div className="grid gap-2">
          <ProductData site={site} />
          {/* <Suspense fallback={<p>Loading from {site}</p>}>
          </Suspense> */}
        </div>
      </ScrollArea>
    </section>
  );
};

export default ProductTray;
