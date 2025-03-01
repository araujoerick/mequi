import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent
        aria-describedby={undefined}
        className="w-full max-w-[347px] px-5 py-8 [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button]:right-5 [&>button]:top-8 [&>button]:mt-1"
      >
        <SheetHeader>
          <SheetTitle className="mb-3.5 text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-[calc(100%-2.5rem)] flex-col justify-between gap-5">
          <ScrollArea>
            <div>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </ScrollArea>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-5">
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-sm font-semibold">
                    {formatCurrency(total)}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full rounded-full">Finalizar pedido</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
