import { ChevronLeft } from "lucide-react";

function SignUpPage() {
  return (
    <div className="flex  h-[1024px] justify-center items-center  gap-[48px] ">
      <div className="flex w-[416px] h-[376px] flex-col justify-center items-start gap-[24px] ">
        <div className=" w-[36px] h-[36px] px-[16px] py-[8px] justify-center items-center gap-[8px] border border-solid rounded-md">
          <ChevronLeft className="w-[16px] h-[16px]" />
        </div>
        <div className="flex w-full h-[60px] flex-col items-start gap-2">
          <p className="text-[24px] font-bold">Log in </p>
          <p className="text-[16px] text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="w-[416] h-[124px] gap-[16px] flex flex-col items-start">
          <input
            className="flex w-full h-[36px] flex-col items-start gap-[16px] border border-solid rounded-md pl-[12px]"
            placeholder="Enter your email address"
          ></input>
          <input
            className="flex w-full h-[36px] flex-col items-start gap-[16px] border border-solid rounded-md pl-[12px]"
            placeholder="Password"
          ></input>
          <p className="decoration-underline">Forgot password ?</p>
        </div>
        <button className="flex w-full h-[36px] justify-center items-center gap-[24px] rounded-md border border-solid bg-primary px-[32px] opacity-[0.2]">
          <p className="text-[14px] text-[#FAFAFA]">Let's Go</p>
        </button>
        <div className="flex w-full h-[24px] justify-center items-center gap-[12px] ">
          <p className="text-[16px] text-[#71717A]">Don’t have an account?</p>
          <p className="text-[16px] text-[#2563EB]">Sign up </p>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
