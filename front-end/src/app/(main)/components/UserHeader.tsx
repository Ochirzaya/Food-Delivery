import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";

export const UserHeader = () => {
  return (
    <div className="flex w-full h-[68px] px-[88px] py-[12px] justify-between items-center bg-[#18181B]">
      <div className="w-[146px] h-[44px] flex items-center gap-[12px] ">
        <img width="46" height="37" src="logo.jpg" />
        <div className="flex flex-col items-start">
          <p className="text-[20px] text-[#FAFAFA] font-bold">NyamNyam</p>
          <p className="text-[12px] text-[#F4F4F5]">Swift delivery</p>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <input className="w-[251px] h-[36px] py-2 px-3 items-center flex gap-1 rounded-full bg-white"></input>
        <Button className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center gap-2 rounded-full bg-[#F4F4F5]">
          <ShoppingCart className="stroke-[#18181B] fill-none" />
        </Button>
        <Button className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center gap-2 rounded-full bg-[#EF4444]">
          <User />
        </Button>
      </div>
    </div>
  );
};
