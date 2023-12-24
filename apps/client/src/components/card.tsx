import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const ProductCard = ({
  title,
  image,
  url,
  price,
  reviews,
  review,
}: Product) => {
  return (
    <Card className="flex gap-1">
      <div className="relative h-40 w-40 border rounded-md overflow-hidden">
        <Image
          className="object-cover opacity-70"
          alt={title}
          loader={() => image}
          src={image}
          fill
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <CardHeader className="p-3">
          <CardTitle className="text-xl leading-5 line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="flex gap-1 items-center">
            <span>{review}</span>
            <Star className="w-3 h-3 fill-yellow-400 stroke-1 opacity-70" />
            <span>({reviews} reviews)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-0 flex justify-between items-end">
          <Badge variant={"secondary"} className="rounded px-5 py-2">
            ₹{price}
          </Badge>
          <Link
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={url || "#"}
          >
            Details
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;
