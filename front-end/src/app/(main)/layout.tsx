import { ChevronLeft, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { FoodCard } from "./components/Foodcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoaderCircle } from "lucide-react";
import { Container } from "./components/Container";
import { MenuContainer } from "./components/MenuContainer";
import { Footer } from "./components/Footer";
import { UserHeader } from "./components/UserHeader";

import { Imageupload } from "./components/Imageupload";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-[4331px]">
      <UserHeader />
      <img className="w-screen h-screen" src="Image.png"></img>
      <Container />
      <div className="w-full px-[88px] bg-[#404040] items-center justify-center flex">
        <MenuContainer />
      </div>
      <Footer />
      <Imageupload />
    </div>
  );
}
