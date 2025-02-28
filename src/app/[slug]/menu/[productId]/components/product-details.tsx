"use client";

import { Prisma } from "@prisma/client";
import { ChefHatIcon, NotepadTextIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";

import CartSheet from "../../components/cart-sheet";
import ProductQuantityControls from "../../components/product-quantity-controls";
import { CartContext } from "../../contexts/cart";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toggleCart, addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleAddToCart = () => {
    addProduct({
      ...product,
      quantity,
    });
    toggleCart();
  };
  const restaurant = product.restaurant;

  return (
    <>
      <div className="-mt-5 flex flex-auto flex-col justify-between gap-5 overflow-hidden rounded-t-3xl bg-white p-5">
        <div className="space-y-6 overflow-hidden">
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
                <p className="text-xs text-muted-foreground">
                  {restaurant.name}
                </p>
              </div>
              <h2 className="font-semibold">{product.name}</h2>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {formatCurrency(product.price)}
              </h3>

              <ProductQuantityControls
                quantity={quantity}
                onDecrease={handleDecreaseQuantity}
                onIncrease={handleIncreaseQuantity}
              />
            </div>
          </div>

          <ScrollArea className="h-[calc(100%-7rem)]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <NotepadTextIcon size={18} />
                <h4 className="text-sm font-semibold">Sobre</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="space-y-2 pt-6">
              <div className="flex items-center gap-1.5">
                <ChefHatIcon size={18} />
                <h4 className="text-sm font-semibold">Ingredientes</h4>
              </div>
              <ul className="">
                {product.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="text-sm text-muted-foreground before:mx-1.5 before:text-muted-foreground before:content-['•']"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>
        <Button onClick={handleAddToCart} className="w-full rounded-full">
          Adicionar à sacola
        </Button>
      </div>

      <CartSheet />
    </>
  );
};

export default ProductDetails;
