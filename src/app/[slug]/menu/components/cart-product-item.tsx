import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";
import ProductQuantityControls from "./product-quantity-controls";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);

  return (
    <div
      key={product.id}
      className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-4 py-2.5"
    >
      <div className="relative min-h-20 min-w-20">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="80px"
          className="rounded-lg bg-muted-foreground/20 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <div>
          <h4 className="line-clamp-1 text-xs">{product.name}</h4>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
        </div>
        <ProductQuantityControls
          product={product}
          onDecrease={() => decreaseProductQuantity(product.id)}
          onIncrease={() => increaseProductQuantity(product.id)}
        />
      </div>
      <Button
        variant="outline"
        className="rounded-sm px-2.5"
        onClick={() => removeProduct(product.id)}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
};

export default CartProductItem;
