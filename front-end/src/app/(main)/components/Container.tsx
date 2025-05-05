import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Container = () => {
  return (
    <div className="w-full h-[176px] bg-[#404040] flex flex-col items-center gap-9 py-8 px-12">
      <div className="w-[1344px] h-[36px] flex px-10 justify-center items-center gap-2.5 ">
        <p className="w-[1264px] h-full text-[30px]">Categories</p>
      </div>
      <div className="w-[1344px] h-[40px] flex items-center gap-2 bg-black-500">
        <Button className="bg-[#404040]">
          <ChevronLeft />
        </Button>
        <div className="w-full h-[36px] flex items-center gap-2">
          <Button className="bg-[#EF4444] h-[36px] rounded-full w-[132px]">
            Appetizers
          </Button>
          <Button className="w-[97px] h-[36px] rounded-full bg-white text-black">
            Salads
          </Button>
          <Button className="w-[95px] h-full rounded-full bg-white text-black">
            Pizzas
          </Button>
          <Button className="w-[171px] h-full rounded-full bg-white text-black">
            Lunch favorites
          </Button>
          <Button className="w-[142px] h-full rounded-full bg-white text-black">
            Main dishes
          </Button>
          <Button className="w-[182px] h-full rounded-full bg-white text-black">
            Fish & Sea foods
          </Button>
          <Button className="w-[118px] h-full rounded-full bg-white text-black">
            Side dish
          </Button>
          <Button className="w-[101px] h-full rounded-full bg-white text-black">
            Brunch
          </Button>
          <Button className="w-[116px] h-full rounded-full bg-white text-black">
            Desserts
          </Button>
        </div>
        <Button className="w-[40px] h-[40px] flex px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#404040]">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
