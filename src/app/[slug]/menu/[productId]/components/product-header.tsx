"use client";

import { Product } from "@prisma/client";
import Image from "next/image";

import HeaderButtons from "../../components/header-buttons";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  return (
    <div className="max-h-80">
      <div className="relative h-80 w-full">
        <HeaderButtons />
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="-z-20 bg-muted-foreground/20 object-contain"
        />
      </div>
    </div>
  );
};

export default ProductHeader;
