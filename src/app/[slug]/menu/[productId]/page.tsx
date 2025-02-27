import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({ where: { id: productId } });
  if (!product) {
    return notFound();
  }

  return (
    <section className="flex h-full flex-col">
      <ProductHeader product={product} />
      <div className="-mt-5 rounded-lg bg-white p-5">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </div>
    </section>
  );
};

export default ProductPage;
