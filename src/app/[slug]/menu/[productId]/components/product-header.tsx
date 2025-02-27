"use client";

import { Product } from "@prisma/client";
import Image from "next/image";

import HeaderButtons from "../../components/header-buttons";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  return (
    <div className="relative min-h-[300px] w-full">
      <HeaderButtons />
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="-z-20 bg-muted-foreground/20 object-contain"
      />
    </div>
  );
};

export default ProductHeader;
