import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}`}
          className="flex items-center justify-between gap-10 border-b px-5 py-3"
        >
          <div>
            <h4 className="text-sm font-medium">{product.name}</h4>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>
          <div className="relative min-h-[82px] min-w-[82px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="82px"
              className="rounded-lg bg-muted-foreground/20 object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
