"use client";

import React from "react";
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

const ProductTray = async ({
  site,
  query,
}: {
  site: "amazon" | "flipkart";
  query: string;
}) => {
  const data = await getData({ site, query });
  return data?.map((e: Product) => (
    <ProductCard
      title={e.title}
      image={e.image}
      url={e.url}
      price={+e.price}
      review={+e.review}
      reviews={+e.reviews}
    />
  ));
};

export default ProductTray;
