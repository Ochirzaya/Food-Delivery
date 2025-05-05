export const Footer = () => {
  return (
    <div className=" flex w-full h-[755px] bg-[#18181B] items-center justify-center flex-col gap-16">
      <div className="flex w-full h-[92px]  items-center justify-center gap-[34px] bg-[#EF4444]">
        <div className="flex items-start">
          <p className=" w-[272px] h-[36px] text-[30px] text-[#FAFAFA]">
            Fresh fast delivered{" "}
          </p>
          <p className=" w-[272px] h-[36px] text-[30px] text-[#FAFAFA]">
            Fresh fast delivered{" "}
          </p>
          <p className=" w-[272px] h-[36px] text-[30px] text-[#FAFAFA]">
            Fresh fast delivered{" "}
          </p>
          <p className=" w-[272px] h-[36px] text-[30px] text-[#FAFAFA]">
            Fresh fast delivered{" "}
          </p>
          <p className=" w-[272px] h-[36px] text-[30px] text-[#FAFAFA]">
            Fresh fast delivered{" "}
          </p>
        </div>
      </div>
      <div className="flex w-[1264px] h-[288px]  items-start gap-[220px]">
        <div className="flex flex-col items-center gap-[12.409px]">
          <img width="46" height="37" src="logo.jpg" />
          <p className="text-[20px] text-[#FAFAFA] font-bold">NyamNyam</p>
          <p className="text-[12px] text-[#F4F4F5]">Swift delivery</p>
        </div>
        <div className="flex items-start gap-[112px]">
          <div className="flex w-[122px] h-[148px] flex-col items-start gap-[16px]">
            <p className="text-[16px] text-[#71717A]">NOMNOM </p>
            <p className="text-[16px] text-[#FAFAFA]">Home </p>
            <p className="text-[16px] text-[#FAFAFA]">Contact us</p>
            <p className="text-[16px] text-[#FAFAFA]">Delivery zone</p>
          </div>
          <div className="flex w-[320px] h-[228px] items-start gap-[56px]">
            <div className="flex w-[132px] h-[228px] flex-col items-start gap-[16px]">
              <p className="text-[16px] text-[#71717A]">MENU</p>
              <p className="text-[16px] text-[#FAFAFA]">Appetizers</p>
              <p className="text-[16px] text-[#FAFAFA]">Salads</p>
              <p className="text-[16px] text-[#FAFAFA]">Pizzas</p>
              <p className="text-[16px] text-[#FAFAFA]">Main dishes</p>
              <p className="text-[16px] text-[#FAFAFA]">Desserts</p>
            </div>
            <div className="flex w-[132px] h-[228px] flex-col justify-end items-start gap-[16px] ">
              <p className="text-[16px] text-[#FAFAFA]">Side dish </p>
              <p className="text-[16px] text-[#FAFAFA]">Brunch</p>
              <p className="text-[16px] text-[#FAFAFA]">Desserts</p>
              <p className="text-[16px] text-[#FAFAFA]">Beverages</p>
              <p className="text-[16px] text-[#FAFAFA]">Fish & Sea foods</p>
            </div>
          </div>
          <div className="flex w-[122px] h-[81px] flex-col justify-end items-start gap-[16px]">
            <p className="text-[16px] text-[#71717A]">FOLLOW US</p>
            <div className="flex w-[72px] h-[37px] justify-center items-start gap-[16px]">
              <img width="28" height="27" src="Facebook.png" />
              <img width="28" height="27" src="instagram.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1264px] h-[88px] items-center gap-[48px] border-t-1 border-gray-400">
        <div className="flex w-[219px] h-[20px] items-end gap-[4px] ">
          <p className="text-[14px] text-[#71717A]">Copy right 2024</p>
          <p className="text-[14px] text-[#71717A]">©</p>
          <p className="text-[14px] text-[#71717A]">Nomnom LLC</p>
        </div>
        <p className="text-[14px] text-[#71717A]">Privacy policy </p>
        <p className="text-[14px] text-[#71717A]">Terms and conditoin</p>
        <p className="text-[14px] text-[#71717A]">Cookie policy</p>
      </div>
    </div>
  );
};
