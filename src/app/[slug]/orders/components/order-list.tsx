"use client";

import { OrderStatus, Prisma } from "@prisma/client";
import { ScrollTextIcon } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format-currency";

import HeaderButtons from "../../menu/components/header-buttons";

interface OrderListProps {
  orders: Array<
    Prisma.OrderGetPayload<{
      include: {
        restaurant: {
          select: {
            name: true;
            avatarImageUrl: true;
          };
        };
        orderProducts: {
          include: {
            product: true;
          };
        };
      };
    }>
  >;
}

const getStatusLabel = (status: OrderStatus) => {
  if (status === "FINISHED") return "Finalizado";
  if (status === "IN_PREPARATION") return "Em preparo";
  if (status === "PENDING") return "Pendente";
  if (status === "PAYMENT_CONFIRMED") return "Pagamento confirmado";
  if (status === "PAYMENT_FAILED") return "Pagamento falhou";
  return "";
};

const OrderList = ({ orders }: OrderListProps) => {
  return (
    <div className="p-5">
      <HeaderButtons />
      <div className="flex items-center gap-3 pb-6 pt-14">
        <ScrollTextIcon size={20} />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>
      <div className="space-y-3">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="space-y-4 p-5">
              <div
                className={`w-fit rounded-full px-2 py-1 text-xs font-semibold text-white ${([OrderStatus.FINISHED] as OrderStatus[]).includes(order.status) && "bg-green-500 text-white"} ${OrderStatus.IN_PREPARATION.includes(order.status) && "bg-yellow-400/15 text-yellow-400"} ${([OrderStatus.PENDING] as OrderStatus[]).includes(order.status) && "bg-gray-500/10 text-gray-500"}`}
              >
                {getStatusLabel(order.status)}
              </div>
              <div className="flex items-center gap-2">
                <div className="relative h-5 w-5">
                  <Image
                    src={order.restaurant.avatarImageUrl}
                    alt={order.restaurant.name}
                    className="rounded-sm"
                    fill
                  />
                </div>
                <p className="text-sm font-semibold">{order.restaurant.name}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                {order.orderProducts.map((orderProduct) => (
                  <div
                    key={orderProduct.id}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 text-xs text-white">
                      {orderProduct.quantity}
                    </div>
                    <p className="text-sm">{orderProduct.product.name}</p>
                  </div>
                ))}
              </div>
              <Separator />
              <p className="text-sm font-medium">
                {formatCurrency(order.total)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
