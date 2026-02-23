"use client";

import { useCartProductStore } from "@/entities/cart";
import { Button } from "@/shared/ui/button";

export const ClearCartButton = () => {
  const clearCart = useCartProductStore((state) => state.clearCart);
  const cartProducts = useCartProductStore((state) => state.cartProducts);
  const isEmpty = Object.keys(cartProducts).length === 0;

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Button
      type="button"
      variant="destructive"
      size="sm"
      onClick={handleClearCart}
      disabled={isEmpty}
    >
      Clear
    </Button>
  );
};
