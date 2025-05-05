import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const Createnewpassword = () => {
  return (
    <div className="flex  h-[1024px] justify-center items-center  gap-[48px] ">
      <div className="flex w-[416px] h-[288px] flex-col justify-center items-start gap-[24px] ">
        <Button className=" flex w-[36px] h-[36px]  justify-center items-center gap-[8px] border border-solid rounded-md">
          <ChevronLeft className="w-[16px] h-[16px] " />
        </Button>
        <div className="flex w-full h-[60px] flex-col items-start gap-2">
          <p className="text-[24px] font-bold">Create a strong password</p>
          <p className="text-[16px] text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <div className="w-[416] h-[124px] gap-[16px] flex flex-col items-start">
          <input
            className="flex w-full h-[36px] flex-col items-start gap-[16px] border border-solid rounded-md pl-[12px]"
            placeholder="Password"
          ></input>
          <input
            className="flex w-full h-[36px] flex-col items-start gap-[16px] border border-solid rounded-md pl-[12px]"
            placeholder="Confirm"
          ></input>
          <div className="w-[129px] h-[16px] flex items-center gap-2">
            <Checkbox>
              <p className="text-[14px] text-[#71717A]">Show password</p>
            </Checkbox>
          </div>
        </div>
        <button className="flex w-full h-[36px] justify-center items-center gap-[24px] rounded-md border border-solid bg-primary px-[32px] opacity-[0.2]">
          <p className="text-[14px] text-[#FAFAFA]">Let's Go</p>
        </button>
        <div className="flex w-full h-[24px] justify-center items-center gap-[12px] ">
          <p className="text-[16px] text-[#71717A]">Already have an account?</p>
          <p className="text-[16px] text-[#2563EB]">Log in </p>
        </div>
      </div>
    </div>
  );
};
