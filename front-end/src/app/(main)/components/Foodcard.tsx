import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const FoodCard = ({
  image,
  FoodName,
  price,
  ingredients,
}: {
  image: string;
  FoodName: string;
  price: number;
  ingredients: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="size-fit flex flex-col text-start  gap-[20px] border rounded-[20px] bg-[#FFF] p-5 relative">
          <div className="absolute flex left-[320px] top-[160px]">
            <Button className="flex w-[44px] h-[44px] justify-center items-center gap-[8px] border rounded-full bg-[#FFF]">
              <Plus className="text-[#EF4444]" />
            </Button>
          </div>
          <img
            className="w-[365px] h-[210px] rounded-[20px]"
            src={image}
            alt=""
          />
          <div className="flex w-[365px] h-[80px] flex-col items-start gap-[8px]">
            <div className="flex w-full h-[32px] justify-center items-center gap-[10px]">
              <p className="text-[24px] text-[#EF4444] font-bold text-nowrap w-[295px]">
                {FoodName}
              </p>
              <p className="text-[18px] text-[#09090B] w-[60px] h-[28px]">
                {price}
              </p>
            </div>
            <p className="text-[14px]">{ingredients}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
};
