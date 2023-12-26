import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import ProductCard from "./card";

export const dynamicParams = true;

const getData = async ({
  site,
  query,
}: {
  site: string;
  query: string;
}): Promise<Product[]> => {
  const fetchedData = await fetch(
    `http://localhost:3001/api/${site}?q=${query}`
  );
  const data = await fetchedData.json();
  return data || [];
};

const ProductDisplay = async ({
  baseImg,
  avatar,
  site,
  query,
}: {
  baseImg: string;
  avatar: string;
  site: "amazon" | "flipkart";
  query: string;
}) => {
  // const data = await getData({ site, query });
  return (
    <section className="flex-1 flex flex-col min-h-full border rounded-md">
      <div className="relative rounded-t-md group h-20 w-full flex items-end">
        <Image
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-all duration-200"
          alt="amazon"
          src={baseImg}
        />

        {/* Avatar Area */}
        <div className="z-10">
          <Avatar className="lg:h-14 lg:w-14 translate-x-6 translate-y-4">
            <AvatarImage className="object-cover" src={avatar} />
            <AvatarFallback>{site[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <ScrollArea className="flex-1 border p-2">
        <div className="grid gap-2">
          {/* {data?.map((e: Product) => (
            <ProductCard
              title={e.title}
              image={e.image}
              url={e.url}
              price={+e.price}
              review={+e.review}
              reviews={+e.reviews}
            />
          ))} */}
          <div className="bg-black w-full h-screen"></div>
          <Button>Load More</Button>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  );
};

export default ProductDisplay;
