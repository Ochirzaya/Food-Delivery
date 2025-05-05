import { ChevronsUpDown } from "lucide-react";

export const ContainerOrder = ({
  No,
  Customer,
  food,
  date,
  total,
  address,
  state,
}: any) => {
  return (
    <div className="flex w-full h-[52px] items-start bg-gray-100">
      <ul className="flex w-[48px] h-full items-center gap-2.5 px-4 py-4">
        <label className="flex items-center gap-2 w-[16px] h-[16px] border rounded-sm border-[#18181B]"></label>
      </ul>
      <ul className="flex w-[56px] h-full px-4 py-4 items-center gap-2.5">
        <p className="text-[14px]">{No}</p>
      </ul>
      <ul className="flex w-[213px] h-full px-4 items-center gap-2.5">
        <p className="text-[14px] text-[#71717A]">{Customer}</p>
      </ul>
      <ul className="flex w-[160px] h-full px-4 items-center gap-2.5">
        <p className="text-[14px] text-[#71717A]">{food}</p>
      </ul>
      <ul className="flex w-[160px] h-full px-4 justify-between items-center">
        <p className="text-[14px] text-[#71717A]">{date}</p>
        <ChevronsUpDown width="16px" height="16px" />
      </ul>
      <ul className="flex w-[160px] h-full px-4 items-center gap-2.5">
        <p className="text-[14px] text-[#71717A]">{total} </p>
      </ul>
      <ul className="flex w-[216px] h-full px-4 items-center gap-2.5">
        <p className="text-[14px] text-[#71717A]">{address}</p>
      </ul>
      <ul className="flex w-[160px] h-full px-4 justify-between items-center">
        <p className="text-[14px] text-[#71717A]">{state}</p>
        <ChevronsUpDown width="16px" height="16px" />
      </ul>
    </div>
  );
};
