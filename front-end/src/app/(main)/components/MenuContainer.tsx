"use client";
import { useEffect, useState } from "react";
import { FoodCard } from "./Foodcard";
import { Key, LoaderCircle } from "lucide-react";
import axios from "axios";
type foodProps = {
  image: string;
  price: number;
  ingredients: string;
  foodName: string;
};

type DataTypes = {
  name: string;
  results: [
    {
      image: string;
      price: number;
      ingredients: string;
      foodName: string;
    }
  ];
};

export const MenuContainer = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/food/all?categoryId=${""}`
    );
    setData(res.data.Food);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="size-fit flex flex-col gap-[54px] bg-[#404040]">
      {data?.map((value, index) => (
        <div key={index}>
          <p className="text-[30px] w-full text-[#FFF] font-bold">
            {value.name}
          </p>
          <div className="flex items-center  gap-9 flex-wrap">
            {value.results.map((value: foodProps, index: number) => (
              <FoodCard
                key={index}
                image={value.image}
                price={value.price}
                ingredients={value.ingredients.slice(0, 80) + " ..."}
                FoodName={value.foodName}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
