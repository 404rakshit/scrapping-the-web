"use client";

import { preah } from "@/components/fonts";
import ProductForm from "./ProductForm";
import ProductTray from "./ProductTray";

export default function Home() {
  return (
    <main className={`${preah.className} w-full`}>
      <ProductForm />
      <div className="flex gap-2 h-[80lvh]">
        <ProductTray
          avatar={"/amazon/icon.png"}
          baseImg={"/amazon/banner.jpg"}
        />

        <ProductTray
          avatar={"/flipkart/icon.jpeg"}
          baseImg={"/flipkart/banner.jpg"}
        />
      </div>
    </main>
  );
}
