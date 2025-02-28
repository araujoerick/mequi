import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";
import CartItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent
        aria-describedby={undefined}
        className="w-full max-w-[347px] px-5 py-8 [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button]:right-5 [&>button]:top-8 [&>button]:mt-1"
      >
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
