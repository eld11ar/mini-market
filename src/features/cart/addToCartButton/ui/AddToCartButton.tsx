'use client';

import { useCartProductStore } from "@/entities/cart";
import type { ProductPresenter } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

type Props = {
  product: ProductPresenter;
};

export const AddToCartButton = ({ product }: Props) => {
  const addToCart = useCartProductStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  }

  return (
    <Button
      type="button"
      onClick={handleAddToCart}
      className={cn(
        "w-1/2 absolute bottom-[32%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100",
        "transition-opacity duration-300",
      )}
    >
      Quick Add
    </Button>
  );
};
