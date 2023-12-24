import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "@/components/card";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

let falseData = [
  {
    title: "Cookwell Bullet Mixer Grinder 600 Watts (5 Jars, 3 Blades, Silver)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yobRRV8nL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Cookwell-Bullet-Mixer-Grinder-Silver/dp/B097XJQZ8H/ref=sr_1_1?keywords=Mixers&qid=1703420566&sr=8-1",
    price: 2477,
    reviews: 19192,
    review: 4.3,
  },
  {
    title: "Butterfly Smart Mixer Grinder, 750W, 4 Jars (Grey)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+cDVETcIL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Butterfly-Smart-750-Watt-Mixer-Grinder/dp/B075JJ5NQC/ref=sr_1_2?keywords=Mixers&qid=1703420566&sr=8-2",
    price: 2999,
    reviews: 23614,
    review: 4,
  },
  {
    title:
      "Longway Super Dlx 750 Watt Juicer Mixer Grinder with 4 Jars for Grinding, Mixing, Juicing with Powerful Motor | 1 Year Warranty | (Black & Gray, 4 Jars)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TdcjXdSHL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Longway-Super-Dlx-Mixer-Grinder/dp/B0C33FLXJJ/ref=sr_1_3?keywords=Mixers&qid=1703420566&sr=8-3",
    price: 1499,
    reviews: 2234,
    review: 4.2,
  },
  {
    title:
      "Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Black)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zhqJg1bTL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Lifelong-LLMG23-500-Watt-Liquidizing-Stainless/dp/B09X5C9VLK/ref=sr_1_4?keywords=Mixers&qid=1703420566&sr=8-4",
    price: 1399,
    reviews: 8332,
    review: 3.9,
  },
  {
    title:
      "Prestige Iris Plus 750 W Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar) 4 Super Efficient Stainless Blades 2 Years Warranty Black, 750 watts",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61JOzccwTCL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Prestige-IRIS-mixer-grinder-Black/dp/B08CFJBZRK/ref=sr_1_5?keywords=Mixers&qid=1703420566&sr=8-5",
    price: 3199,
    reviews: 17949,
    review: 3.8,
  },
  {
    title:
      "Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+M1QrVNIL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Prestige-Iris-Grinder-Stainless-Juicer/dp/B0756K5DYZ/ref=sr_1_6?keywords=Mixers&qid=1703420566&sr=8-6",
    price: 2999,
    reviews: 46196,
    review: 3.9,
  },
  {
    title:
      "Prestige 500 Watts Orion Mixer Grinder with 3 Stainless Steel Jars |2 years warranty| Red & White",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51dxXaDA9GL._AC_UY218_.jpg",
    url: "https://www.amazon.in/TTK-Prestige-Limited-Grinder-1200ml/dp/B09ZDVL7L8/ref=sr_1_7?keywords=Mixers&qid=1703420566&sr=8-7",
    price: 2099,
    reviews: 2369,
    review: 3.9,
  },
  {
    title:
      "Philips Daily Collection HL7610/04 500-Watt 3 Jar Mixer Grinder (Blue)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51az8GZf-ZL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Philips-Daily-Collection-HL7610-500-Watt/dp/B00N8T4D5S/ref=sr_1_8?keywords=Mixers&qid=1703420566&sr=8-8",
    price: 1999,
    reviews: 123,
    review: 3.6,
  },
  {
    title:
      "Preethi Blue Leaf Diamond MG-214 mixer grinder 750 watt (Blue/White), 3 jars & Flexi Lid, FBT motor with 2yr Guarantee & Lifelong Free Service",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51a02ZDkk6S._AC_UY218_.jpg",
    url: "https://www.amazon.in/Preethi-Blue-Leaf-Diamond-750-Watt/dp/B0188KPKB2/ref=sr_1_9?keywords=Mixers&qid=1703420566&sr=8-9",
    price: 3599,
    reviews: 13208,
    review: 4.1,
  },
  {
    title: "Butterfly Hero Mixer Grinder, 500W, 3 Jars (Grey)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71r6x8qJF4L._AC_UY218_.jpg",
    url: "https://www.amazon.in/Butterfly-Hero-500-Mixer-Grinder/dp/B07TXCY3YK/ref=sr_1_10?keywords=Mixers&qid=1703420566&sr=8-10",
    price: 1999,
    reviews: 12401,
    review: 3.9,
  },
  {
    title:
      "Lifelong 500W Mixer Grinder with 4 Jars | Stainless Steel blades | 3 Speed Operation, 1 Year Manufacturer's Warranty(Black) LLMG39",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614aB7YNyzL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Lifelong-Stainless-Operation-Manufacturers-LLMG39/dp/B0C7LDLNWP/ref=sr_1_11?keywords=Mixers&qid=1703420566&sr=8-11",
    price: 1399,
    reviews: 36573,
    review: 3.8,
  },
  {
    title:
      "Bajaj GX-1 Mixer Grinder 500W|Superior Mixie For Kitchen|2-in-1 for Dry Grinding| Blade Function With Titan Motor|3 Stainless Steel Mixer Jars|1 Year Product Warranty By Bajaj|Black",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51NNA+k9S0L._AC_UY218_.jpg",
    url: "https://www.amazon.in/Bajaj-GX-Mixer-Grinder-Function/dp/B0BB3SDD7J/ref=sr_1_12?keywords=Mixers&qid=1703420566&sr=8-12",
    price: 2279,
    reviews: 21718,
    review: 4,
  },
  {
    title: "Sujata Supermix, Mixer Grinder, 900 Watts, 3 Jars (White)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51e5W3iYRSL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Sujata-Supermix-AM-007-Watt-Juicer-Grinder/dp/B075S9FVRY/ref=sr_1_13?keywords=Mixers&qid=1703420566&sr=8-13",
    price: 5525,
    reviews: 2069,
    review: 4.5,
  },
  {
    title:
      "Bosch Appliances TrueMixx Pro Mixer Grinder MGM8642BIN, 750W, 4 Jars, (Black)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/610yiAGFePL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Bosch-TrueMixx-Pro-750-Watt-Grinder/dp/B07NW2S7N1/ref=sr_1_14?keywords=Mixers&qid=1703420566&sr=8-14",
    price: 5299,
    reviews: 7111,
    review: 4.3,
  },
  {
    title:
      "Wonderchef Nutri-blend Mixer, Grinder & Blender|Powerful 400W 22000 RPM 100% Full Copper Motor|Stainless steel Blades|2 unbreakable jars|2 Years warranty | Recipe book by Chef Sanjeev Kapoor | Black",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61626Ya4tJL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Wonderchef-Nutri-Blend-Watts-Juicer-Grinder/dp/B00W56GLOQ/ref=sr_1_15?keywords=Mixers&qid=1703420566&sr=8-15",
    price: 2699,
    reviews: 29475,
    review: 3.9,
  },
  {
    title: "Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61c4if-wvcL._AC_UY218_.jpg",
    url: "https://www.amazon.in/Butterfly-Jet-Elite-750-Watt-Grinder/dp/B07DGD4Z4C/ref=sr_1_16?keywords=Mixers&qid=1703420566&sr=8-16",
    price: 3299,
    reviews: 28753,
    review: 3.9,
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
