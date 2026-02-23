"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartProductStore } from "@/entities/cart";
import { Button } from "@/shared/ui/button";
import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";

export const CartView = () => {
  const cartProducts = useCartProductStore((state) => state.cartProducts);
  const isEmpty = Object.keys(cartProducts).length === 0;

  if (isEmpty) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
        <ShoppingCart className="size-16 text-muted-foreground" />
        <div className="space-y-1">
          <h2 className="text-xl font-bold">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground">
            Looks like you haven't added anything yet
          </p>
        </div>
        <Button asChild variant="link">
          <Link href="/products">Browse products</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 lg:gap-12">
      <CartList />

      <CartTotal />
    </section>
  );
};
