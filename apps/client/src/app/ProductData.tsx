import ProductCard from "@/components/card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircleSlash } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ProductData = ({ site }: { site: string }) => {
  const query = useSearchParams().get("search");

  const { data, status, isFetching } = useQuery({
    queryKey: [site, site, query],
    queryFn: async ({ queryKey }): Promise<Product[]> => {
      if (!queryKey[2]) return [];
      const { data } = await axios({
        url: `http://localhost:8080/${queryKey[1]}`,
        method: "POST",
        data: {
          query: queryKey[2],
        },
      });
      return data;
    },
  });

  if (!query)
    return (
      <div className="grid w-full h-[60lvh] place-items-center">
        <p className="underline underline-offset-4 text-muted-foreground text-xl">
          Nothing Searched Yet
        </p>
      </div>
    );

  if (status === "pending")
    return (
      <div className="grid w-full h-[60lvh] place-items-center">
        <p className="flex gap-2 text-muted-foreground text-xl">
          <Icons.spinner className="animate-spin" /> Crawlling the Website...
        </p>
      </div>
    );

  if (status === "success")
    return (
      <>
        {data?.map((e) => (
          <ProductCard
            title={e.title}
            image={e.image}
            url={e.url}
            price={e.price}
            review={e.review}
            reviews={e.reviews}
          />
        ))}
        {data.length === 0 ? (
          <div className="grid w-full h-[60lvh] place-items-center">
            <p className="flex gap-2 items-center text-muted-foreground text-xl">
              <CircleSlash className="stroke-muted-foreground w-5 h-5" /> No
              Electronics Found
            </p>
          </div>
        ) : (
          <Button>Load More</Button>
        )}
      </>
    );
};

export default ProductData;
