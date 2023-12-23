import { Carrot, Footprints, Laptop, Shirt, ShirtIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Menu = () => {
  return (
    <div className="grid place-content-start p-2 gap-2">
      {/* <div className="pr-1 h-fit rounded-2xl overflow-hidden flex items-center gap-3 shadow"> */}
      <Button variant={"outline"} className="p-2 group">
        <Laptop className="w-6 h-6 stroke-1 group-hover:scale-110 transition-all duration-300" />
      </Button>
      <Button variant={"outline"} className="p-2 group">
        <Shirt className="w-6 h-6 stroke-1 group-hover:scale-110 transition-all duration-300" />
      </Button>
      <Button variant={"outline"} className="p-2 group">
        <Carrot className="w-6 h-6 stroke-1 group-hover:scale-110 transition-all duration-300" />
      </Button>
      <Button variant={"outline"} className="p-2 group">
        <Footprints className="w-6 h-6 stroke-1 group-hover:scale-110 transition-all duration-300" />
      </Button>
      {/* </div> */}
    </div>
  );
};

export default Menu;
