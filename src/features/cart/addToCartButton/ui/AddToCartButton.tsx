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
        "w-full sm:w-1/2 sm:absolute sm:bottom-[38%] sm:left-1/2 sm:-translate-x-1/2",
        "sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300",
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
