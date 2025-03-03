"use client";

import { Restaurant } from "@prisma/client";
import Image from "next/image";

import HeaderButtons from "./header-buttons";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  return (
    <div className="relative h-[250px] w-full">
      <HeaderButtons />
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        priority
        fill
        className="-z-20 object-cover"
      />
    </div>
  );
};

export default RestaurantHeader;
