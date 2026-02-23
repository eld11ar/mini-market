"use client";

import { useCartProductStore } from "@/entities/cart";
import { Button } from "@/shared/ui/button";

export const ClearCartButton = () => {
  const clearCart = useCartProductStore((state) => state.clearCart);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Button
      type="button"
      variant="destructive"
      size="sm"
      onClick={handleClearCart}
    >
      Clear
    </Button>
  );
};
