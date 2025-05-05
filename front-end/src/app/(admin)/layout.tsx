import { LayoutDashboard } from "lucide-react";
import { Truck } from "lucide-react";
import { Settings } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import { ContainerOrder } from "./orders/components/ContainerOrder";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[1440px] h-[1024px] bg-gray-100 items-center ">
      <div className="flex w-[205px] h-[1024px] px-[20px] py-[36px] flex-col items-start  gap-10 bg-[#FFF]">
        <div className="flex items-center gap-2 w-[165px] h-[44px]">
          <div className="flex w-[40px] h-[40px] px-1 py-[3px] justify-center items-center gap-2.5">
            <img src="logo.jpg" />
          </div>
          <div className="flex w-[81px] h-[44px] flex-col justify-center items-start">
            <p className="text-[18px] text-[#09090B]">NomNom</p>
            <p className="text-[12px] text-[#71717A]">Swift delivery</p>
          </div>
        </div>
        <div className="flex w-[165px] h-[168px] flex-col items-center gap-6">
          <div className="flex w-full h-[40px] px-6 py-2 items-center gap-2.5">
            <LayoutDashboard width="22px" height="22px" />
            <p className="text-[14px]">Food menu</p>
          </div>
          <div className="flex w-full h-[40px] px-6 py-2 items-center gap-2.5  rounded-full bg-[#18181B]">
            <Truck className="stroke-white w-[22px] h-[22px]" />
            <p className="font-[14xp] text-[#FAFAFA]">Orders</p>
          </div>
          <div className="flex w-full h-[40px] px-6 py-2 items-center gap-2.5">
            <Settings width="22px" height="22px" />
            <p className="text-[14px]">Settings</p>
          </div>
        </div>
      </div>
      <div className="flex w-[1171px] h-[948px] flex-col items-end gap-6 pl-6">
        <div className="flex items-start gap-2.5 w-[36px] h-[36px] bg-black rounded-full">
          <img src="avatar.jpg"></img>
        </div>
        <div className="flex w-full h-[800px] flex-col items-start border-solid rounded-lg bg-[#FFF]">
          <div className="flex w-full h-[76px] py-4 px-4 justify-between items-center border-solid border-border ">
            <div className="flex w-[485px] h-[44px] flex-col items-start">
              <p className="text-[20px] text-[#09090B] font-bold">Orders</p>
              <p className="text-[12px] text-[#71717A]">32 items</p>
            </div>
            <div className="flex w-[491px] h-[36px] items-center gap-3">
              <div className="flex w-[300px] h-full flex-col items-start gap-2">
                <div className="flex h-full w-full justify-between px-4 py-2 items-center border-solid border rounded-full">
                  <div className="w-[268px] h-[20px] flex items-center gap-2">
                    <CalendarDays width="16px" height="16px" />
                    <p className="text-[14px] text-[#09090B]">
                      13 June 2023 - 14 July 2023
                    </p>
                  </div>
                </div>
              </div>
              <Button className="flex w-[179px] h-[36px] px-4 py-2 justify-center items-center gap-2 rounded-full bg-[#18181B] opacity-[0.2]">
                <p className="text-[14px] text-[#FAFAFA]">
                  Change delivery state
                </p>
              </Button>
            </div>
          </div>
          <ContainerOrder />
          <div className="w-full h-[672px] flex flex-col items-start"></div>
          <div className="w-[24px] h-[24px] flex justify-center items-center gap-2"></div>
        </div>
        <div className="flex w-full h-[64px] py-4 justify-between items-center pl-2">
          <div className="w-[168px] h-[20px] flex flex-col justify-between items-center"></div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                  <PaginationLink href="#">2</PaginationLink>
                  <PaginationLink href="#">3</PaginationLink>
                  <PaginationLink href="#">4</PaginationLink>
                  <PaginationLink href="#">5</PaginationLink>
                  <PaginationLink href="#">...</PaginationLink>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
