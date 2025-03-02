"use client";

import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartSheet from "./cart-sheet";
import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { menuCategories: { include: { products: true } } };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);

  const { products, total, totalQuantity, toggleCart } =
    useContext(CartContext);

  const handleCategoryClick = (category: MenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
    return selectedCategory?.id === category.id ? "default" : "outline";
  };

  return (
    <div className="relative z-50 -mt-6 rounded-t-3xl bg-white">
      <div className="space-y-3 border-b p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={restaurant.avatarImageUrl}
              width={45}
              height={45}
              alt={restaurant.name}
            />
            <div>
              <h2 className="text-lg font-semibold">{restaurant.name}</h2>
              <p className="text-xs opacity-55">{restaurant.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full border px-2.5 py-1.5">
            <div className="relative h-3 w-3">
              <Image src="/star.svg" alt="ranting" fill />
            </div>
            <p className="text-xs font-medium">5.0</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto!</p>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex w-max space-x-2 p-5">
          {restaurant.menuCategories.map((category) => (
            <Button
              onClick={() => handleCategoryClick(category)}
              key={category.id}
              variant={getCategoryButtonVariant(category)}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="px-5 font-semibold">{selectedCategory.name}</h3>
      <Products products={selectedCategory.products} />

      {products.length > 0 && (
        <div className="sticky bottom-0 left-0 right-0 flex w-full items-center justify-between border-t bg-white p-5 shadow-[0_-5px_10px_rgba(0,0,0,.1)]">
          <div>
            <p className="text-xs text-muted-foreground">Total dos pedidos</p>
            <p className="text-sm font-semibold">
              {formatCurrency(total)}
              <span className="text-xs font-normal text-muted-foreground">
                {" "}
                / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
              </span>
            </p>
          </div>
          <Button variant="destructive" onClick={toggleCart}>
            Ver sacola
          </Button>
          <CartSheet />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;
