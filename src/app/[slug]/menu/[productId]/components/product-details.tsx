"use client";

import { Prisma } from "@prisma/client";
import {
  ChefHatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  NotepadTextIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: { avatarImageUrl: true; name: true };
      };
    };
  }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => Math.max(prev - 1, 1));

  const restaurant = product.restaurant;

  return (
    <div className="-mt-5 flex flex-auto flex-col justify-between gap-5 rounded-t-3xl bg-white p-5">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <Image
                src={restaurant.avatarImageUrl}
                alt={restaurant.name}
                width={16}
                height={16}
                className="rounded-full"
              />
              <p className="text-xs text-muted-foreground">{restaurant.name}</p>
            </div>
            <h2 className="font-semibold">{product.name}</h2>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {formatCurrency(product.price)}
            </h3>

            <div className="flex items-center gap-2 text-center">
              <Button
                variant="secondary"
                className="h-8 w-8 rounded-xl"
                onClick={handleDecreaseQuantity}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="w-5">{quantity}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={handleIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <NotepadTextIcon size={18} />
            <h4 className="text-sm font-semibold">Sobre</h4>
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <ChefHatIcon size={18} />
            <h4 className="text-sm font-semibold">Ingredientes</h4>
          </div>
          <ul>
            {product.ingredients.map((ingredient) => (
              <li key={ingredient} className="text-sm text-muted-foreground">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button className="w-full rounded-full">Adicionar à sacola</Button>
    </div>
  );
};

export default ProductDetails;
