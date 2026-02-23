"use client";

import { Minus, Plus } from "lucide-react";
import { useCartProductStore } from "@/entities/cart";
import type { ProductPresenter } from "@/entities/product";
import { Button, type ButtonVariants } from "@/shared/ui/button";

type Props = {
  product: ProductPresenter;
  size?: BtnSize;
};

type BtnSize = "small" | "large";

const SIZES = {
  small: "icon-sm",
  large: "icon-lg",
} satisfies Record<BtnSize, ButtonVariants["size"]>;

export const ChangeCartQuantity = ({ product, size }: Props) => {
  const addToCart = useCartProductStore((state) => state.addToCart);
  const onUpdateQuantity = useCartProductStore(
    (state) => state.onUpdateQuantity,
  );
  const cartProduct = useCartProductStore(
    (state) => state.cartProducts[product.id],
  );

  const carProductQuantity = cartProduct?.quantity ?? 0;

  const btnSize = size ? SIZES[size] : "icon-sm";

  const handleIncrease = () => {
    if (!cartProduct) {
      addToCart(product);
    } else {
      onUpdateQuantity(product.id, carProductQuantity + 1);
    }
  };

  const handleDecrease = () => {
    onUpdateQuantity(product.id, carProductQuantity - 1);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        type="button"
        size={btnSize}
        variant="outline"
        onClick={handleDecrease}
      >
        <Minus />
      </Button>
      <span className="w-6 text-center text-sm font-semibold">
        {carProductQuantity}
      </span>
      <Button
        type="button"
        size={btnSize}
        variant="outline"
        onClick={handleIncrease}
      >
        <Plus />
      </Button>
    </div>
  );
};
