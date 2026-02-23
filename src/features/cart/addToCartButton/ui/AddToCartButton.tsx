"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { useCartProductStore } from "@/entities/cart";
import type { ProductPresenter } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

type Props = {
  product: ProductPresenter;
};

export const AddToCartButton = ({ product }: Props) => {
  const addToCart = useCartProductStore((state) => state.addToCart);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };

  return (
    <Button
      type="button"
      disabled={isAdded}
      onClick={handleAddToCart}
      className={cn(
        "w-1/2 absolute bottom-[32%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100",
        "transition-opacity duration-300",
      )}
    >
      {isAdded ? (
        <>
          Added <Check />
        </>
      ) : (
        "Quick Add"
      )}
    </Button>
  );
};
