import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const Forgotpassword = () => {
  return (
    <div className="flex  h-[1024px] justify-center items-center  gap-[48px] ">
      <div className="flex w-[416px] h-[376px] flex-col justify-center items-start gap-[24px] ">
        <Button className=" w-[36px] h-[36px] px-[16px] py-[8px] justify-center items-center gap-[8px] border border-solid rounded-md bg-white">
          <ChevronLeft className="w-[16px] h-[16px] stroke-[#18181B]" />
        </Button>
        <div className="flex w-full h-[60px] flex-col items-start gap-2">
          <p className="text-[24px] font-bold">Reset your password </p>
          <p className="text-[16px] text-[#71717A]">
            Enter your email to receive a password reset link.
          </p>
        </div>
        <div className="w-[416] h-[124px] gap-[16px] flex flex-col items-start">
          <input
            className="flex w-full h-[36px] flex-col items-start gap-[16px] border border-solid rounded-md pl-[12px]"
            placeholder="Enter your email address"
          ></input>
          <p className="decoration-underline">Forgot password ?</p>
        </div>
        <Button className="flex w-full h-[36px] justify-center items-center gap-[24px] rounded-md border border-solid bg-primary px-[32px] opacity-[0.2]">
          <p className="text-[14px] text-[#FAFAFA]">Send link</p>
        </Button>
        <div className="flex w-full h-[24px] justify-center items-center gap-[12px] ">
          <p className="text-[16px] text-[#71717A]">Don’t have an account?</p>
          <p className="text-[16px] text-[#2563EB]">Sign up </p>
        </div>
      </div>
    </div>
  );
};
