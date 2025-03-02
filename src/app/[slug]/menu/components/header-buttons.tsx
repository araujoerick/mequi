import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const HeaderButtons = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  const pathname = usePathname();
  const isOrderPage = pathname.includes("/orders");
  console.log(isOrderPage);

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full bg-white"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className={`absolute right-4 top-4 z-50 rounded-full ${isOrderPage ? "pointer-events-none" : "bg-white"}`}
      >
        <ScrollTextIcon />
      </Button>
    </>
  );
};

export default HeaderButtons;
