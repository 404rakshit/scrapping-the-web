"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  product: z.string(),
});

const ProductForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const search = searchParams.get("search");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const newParams = new URLSearchParams(searchParams.toString());

    if (values.product) newParams.set("search", values.product);
    else newParams.delete("search");

    router.push(`/?${newParams}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 max-w-2xl max-lg:w-full "
      >
        <FormField
          control={form.control}
          name="product"
          // defaultValue={searchParams.get("search") || ""}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>product</FormLabel> */}
              <FormControl>
                <Input
                  defaultValue={searchParams.get("search") || ""}
                  autoComplete="off"
                  className="flex-1"
                  placeholder="Product Name"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"outline"} className="px-6">
          <Search className="w-4 h-4" />
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
