import React from "react";
import { ChevronLeft } from 'lucide-react';




export const Email = () => {
    return (
        <div className="w-screen h-[1024px]">
            <div className="flex w-[416px] h-[288px] flex-col justify-center items-start gap-[24px]">
            <button className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center border border-solid rounded-md">
               <div className="w-[16px] h-[16px] items-center justify-center flex">
                <ChevronLeft/>
               </div>
            </button>
            <div className="flex w-[416px] h-[60px] flex-col flex-start gap-[4px] ">
                <p className="text-[24px] font-bold">Create your account</p>
                <p className="text-[16px] text-[#71717A]">Sign up to explore your favorite dishes.</p>
            </div>
          

            </div>
        </div>
    )
}