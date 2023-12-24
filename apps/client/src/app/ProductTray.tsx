import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "@/components/card";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

let falseData = [
  {
    title:
      "Katana GF66 Core i7 12th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz) Katana GF66 12UC-632IN Gaming Laptop (15.6 inch, Black, 2.25 kg)",
    image: "https://m.media-amazon.com/images/I/51kkHOlY-BL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Katana-GF66-Core-12th/dp/B0BLJF2H1X/ref=sr_1_1?keywords=MSI+Katana&qid=1703427769&sr=8-1",
    price: 75990,
    reviews: 1,
    review: 5,
  },
  {
    title:
      "Katana 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (8GBx2/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 3050, GDDR6 6GB/Black/2.25Kg), B12UDXK-1005IN",
    image: "https://m.media-amazon.com/images/I/61DadtLsm2L._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Katana-15-i5-12450H-B12UDXK-1005IN/dp/B0C3HY3226/ref=sr_1_2?keywords=MSI+Katana&qid=1703427769&sr=8-2",
    price: 72990,
    reviews: 5,
    review: 4.7,
  },
  {
    title:
      "Katana 15, Intel 12th Gen. i7-12650H, 40CM QHD 165Hz Gaming Laptop (8GBx2/1TB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 4070,GDDR6 8GB/Black/2.25Kg), B12VGK-1295IN",
    image: "https://m.media-amazon.com/images/I/61-nt9Mfv5L._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i7-12650H-Windows-GeForce-B12VGK-1295IN/dp/B0CJ9Q2825/ref=sr_1_3?keywords=MSI+Katana&qid=1703427769&sr=8-3",
    price: 132990,
    reviews: null,
    review: null,
  },
  {
    title:
      'Katana GF66 12UCOK 15.6" FHD (1920 * 1080) Gaming Laptop - Alder Lake Intel Core i7-12650H DDR5 8GB*2 (4800MHz) RAM 512GB NVMe PCIe SSD Gen4x4 RTX3050 GDDR6 4GB Win 11 Home - 9S7-158424-800',
    image: "https://m.media-amazon.com/images/I/71vXD7cLZfL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Katana-12UCOK-Gaming-Laptop/dp/B09XWDJBMV/ref=sr_1_4?keywords=MSI+Katana&qid=1703427769&sr=8-4",
    price: 100961,
    reviews: 13,
    review: 4.2,
  },
  {
    title:
      "Katana GF66, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (16GB/512GB NVMe SSD/Windows 11 Home/NVIDIA RTX 3050 4GB GDDR6/Black/2.25Kg), 12UCOK-693IN",
    image: "https://m.media-amazon.com/images/I/71phu3c7ONL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Katana-12UCOK-Gaming-Laptop/dp/B09XX2G3ND/ref=sr_1_5?keywords=MSI+Katana&qid=1703427769&sr=8-5",
    price: 69990,
    reviews: 13,
    review: 4.2,
  },
  {
    title:
      "Katana 17, Intel 13th Gen. i7-13620H, 44CM FHD 144Hz Gaming Laptop (8GBx2/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX2050, 4GB GDDR6/Black/2.6Kg), B13UCXK-256IN",
    image: "https://m.media-amazon.com/images/I/71+bSm87KmL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i7-13620H-Windows-GeForce-B13UCXK-256IN/dp/B0BTW1Y5NP/ref=sr_1_6?keywords=MSI+Katana&qid=1703427769&sr=8-6",
    price: 88990,
    reviews: 8,
    review: 2.8,
  },
  {
    title:
      "Katana 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 3050, GDDR6 6GB/Black/2.25Kg), B12UDXK-1006IN",
    image: "https://m.media-amazon.com/images/I/61DadtLsm2L._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Katana-15-i5-12450H-B12UDXK-1006IN/dp/B0C3HWXV8X/ref=sr_1_7?keywords=MSI+Katana&qid=1703427769&sr=8-7",
    price: 69990,
    reviews: 15,
    review: 4.1,
  },
  {
    title:
      "Katana 15, Intel Core i7-13620H, 40CM FHD 144Hz Gaming Laptop (8GBx2/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 4060, GDDR6 8GB/Black/2.25Kg), B13VFK-296IN",
    image: "https://m.media-amazon.com/images/I/617m30IvETL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i7-13620H-Windows-GeForce-B13VFK-296IN/dp/B0BTW2K2LN/ref=sr_1_8?keywords=MSI+Katana&qid=1703427769&sr=8-8",
    price: 135990,
    reviews: 11,
    review: 4.5,
  },
  {
    title:
      "Sword 15 A12UDX, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX3050, 6GB GDDR6/White/2.25Kg), A12UDX-468IN",
    image: "https://m.media-amazon.com/images/I/61CIMpkHZdL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i5-12450H-Windows-GeForce-A12UDX-468IN/dp/B0BW9NT5SF/ref=sr_1_9?keywords=MSI+Katana&qid=1703427769&sr=8-9",
    price: 78990,
    reviews: 11,
    review: 3.8,
  },
  {
    title:
      "Sword 15 A12VF, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (8GBx2/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4060, 8GB GDDR6/White/2.25Kg), A12VF-401IN",
    image: "https://m.media-amazon.com/images/I/71cRA3lD-8L._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i7-12650H-Gaming-Laptop-Windows/dp/B0BW9NMXP5/ref=sr_1_10?keywords=MSI+Katana&qid=1703427769&sr=8-10",
    price: 102990,
    reviews: 32,
    review: 3.9,
  },
  {
    title:
      "Sword 15 A12VF, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4050, 6GB GDDR6/White/2.25Kg), A12VE-402IN",
    image: "https://m.media-amazon.com/images/I/71cRA3lD-8L._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i7-12650H-Windows-GeForce-A12VE-402IN/dp/B0BW9N46YZ/ref=sr_1_11?keywords=MSI+Katana&qid=1703427769&sr=8-11",
    price: 97990,
    reviews: 32,
    review: 3.9,
  },
  {
    title:
      "Titan GT77 HX, Intel 13th Gen. i9-13980HX, 44CM FHD 144Hz Mini LED, HDR 1000 Gaming Laptop (64GB/2TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4080, 12GB GDDR6/Core Black/3.3Kg), 13VH-093IN",
    image: "https://m.media-amazon.com/images/I/71yWBoj2kuL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-i9-13980HX-Windows-GeForce-13VH-093IN/dp/B0BWJX4X2H/ref=sr_1_12?keywords=MSI+Katana&qid=1703427769&sr=8-12",
    price: 389990,
    reviews: 15,
    review: 3.7,
  },
  {
    title:
      "Bravo 15 Gaming Laptop, AMD Ryzen 5 7535HS, 40CM FHD 144Hz Laptop (16GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 2050, GDDR6 4GB/Black/2.25Kg), C7UCXK-094IN",
    image: "https://m.media-amazon.com/images/I/61PrdKgYaYL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Gaming-Windows-GeForce-C7UCXK-094IN/dp/B0C5J8QMPM/ref=sr_1_13?keywords=MSI+Katana&qid=1703427769&sr=8-13",
    price: 57990,
    reviews: 5,
    review: 3.3,
  },
  {
    title:
      "Modern 15, AMD Ryzen 7-7730U, 40CM FHD 60Hz Laptop (16GB/1TB NVMe SSD/Windows 11 Home/AMD Radeon Graphics/Classic Black/1.7Kg), B7M-073IN",
    image: "https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Modern-15-Graphics-B7M-073IN/dp/B0BYZWQF4N/ref=sr_1_14?keywords=MSI+Katana&qid=1703427769&sr=8-14",
    price: 59990,
    reviews: 14,
    review: 3.6,
  },
  {
    title:
      "Cyborg 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 2050, GDDR6 4GB/Black/1.98Kg), A12UCX-265IN",
    image: "https://m.media-amazon.com/images/I/61UQ4m-H+yL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Cyborg-15-i5-12450H-A12UCX-265IN/dp/B0C3J2MHG9/ref=sr_1_15?keywords=MSI+Katana&qid=1703427769&sr=8-15",
    price: 55999,
    reviews: 35,
    review: 3.9,
  },
  {
    title:
      "Bravo 15 Gaming Laptop,AMD Ryzen 5 7535HS, 40CM FHD 144Hz Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 2050, GDDR6 4GB/Black/2.25Kg), C7UCXK-095IN",
    image: "https://m.media-amazon.com/images/I/61PrdKgYaYL._AC_UY218_.jpg",
    url: "https://www.amazon.in/MSI-Gaming-Windows-GeForce-C7UCXK-095IN/dp/B0C5JC7CJJ/ref=sr_1_16?keywords=MSI+Katana&qid=1703427769&sr=8-16",
    price: 54990,
    reviews: 10,
    review: 4.9,
  },
];

const ProductTray = ({
  baseImg,
  avatar,
}: {
  baseImg: string;
  avatar: string;
}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
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
          {falseData.map((e) => (
            <ProductCard
              title={e.title}
              image={e.image}
              url={e.url}
              price={+e.price}
              review={+e.review}
              reviews={+e.reviews}
            />
          ))}
          <Button>Load More</Button>
        </div>
      </ScrollArea>
    </section>
  );
};

export default ProductTray;
