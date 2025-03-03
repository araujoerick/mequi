import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const HeaderButtons = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  const pathname = usePathname();
  const isOrderPage = pathname.includes("/orders");

  const { slug } = useParams<{ slug: string }>();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={handleBackClick}
        className="absolute left-4 top-4 z-50 rounded-full bg-white"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={handleOrdersClick}
        className={`absolute right-4 top-4 z-50 rounded-full ${isOrderPage ? "pointer-events-none" : "bg-white"}`}
      >
        <ScrollTextIcon />
      </Button>
    </>
  );
};

export default HeaderButtons;
