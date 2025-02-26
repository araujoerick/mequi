import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  return (
    <section className="mx-auto flex h-dvh max-w-[390px] flex-col items-center justify-center gap-16 px-6 py-24">
      <div className="flex flex-col items-center gap-1.5">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <p className="text-lg font-semibold">{restaurant?.name}</p>
      </div>

      <div className="space-y-3 pt-8 text-center">
        <h1 className="text-3xl font-semibold">Seja bem-vindo!</h1>
        <p className="text-sm">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>

      <div className="grid grid-cols-2 justify-between gap-4">
        <ConsumptionMethodOption
          buttonText="Para comer aqui"
          imageAlt="Hambuguer"
          imageUrl="/dine_in.svg"
          option="DINE_IN"
          slug={slug}
        />
        <ConsumptionMethodOption
          buttonText="Para levar"
          imageAlt="Saco"
          imageUrl="/takeaway.svg"
          option="TAKEAWAY"
          slug={slug}
        />
      </div>
    </section>
  );
};

export default RestaurantPage;
