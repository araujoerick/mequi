import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ productId: string; slug: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId, slug } = await params;
  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: { avatarImageUrl: true, name: true, slug: true },
      },
    },
  });
  if (!product) {
    return notFound();
  }
  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }

  return (
    <section className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </section>
  );
};

export default ProductPage;
