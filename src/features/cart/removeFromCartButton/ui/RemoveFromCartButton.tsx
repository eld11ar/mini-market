"use client";

import { Trash } from "lucide-react";
import { useCartProductStore } from "@/entities/cart";
import type { ProductId } from "@/entities/product";
import { Button } from "@/shared/ui/button";

type Props = {
  productId: ProductId;
};

export const RemoveFromCartButton = ({ productId }: Props) => {
  const removeFromCart = useCartProductStore((state) => state.removeFromCart);

  const handleRemoveFromCart = () => {
    removeFromCart(productId);
  };

  return (
    <Button
      type="button"
      variant="destructive"
      size="icon-sm"
      onClick={handleRemoveFromCart}
    >
      <Trash />
    </Button>
  );
};
