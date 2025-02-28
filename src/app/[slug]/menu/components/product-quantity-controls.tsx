import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CartProduct } from "../contexts/cart";

interface ProductQuantityControlsProps {
  product?: CartProduct;
  quantity?: number;
  onDecrease: (productId?: string) => void;
  onIncrease: (productId?: string) => void;
}

const ProductQuantityControls = ({
  product,
  quantity,
  onDecrease,
  onIncrease,
}: ProductQuantityControlsProps) => {
  return (
    <div className="flex items-center gap-2 text-center">
      <Button
        variant="secondary"
        className="h-8 w-8 rounded-xl"
        onClick={() => onDecrease(product?.id)}
      >
        <ChevronLeftIcon />
      </Button>
      <p className="w-5">{product ? product.quantity : quantity}</p>
      <Button
        variant="destructive"
        className="h-8 w-8 rounded-xl"
        onClick={() => onIncrease(product?.id)}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default ProductQuantityControls;
