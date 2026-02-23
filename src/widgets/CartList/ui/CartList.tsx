"use client";

import { CartProductCard, useCartProductStore } from "@/entities/cart";
import { ChangeCartQuantity } from "@/features/cart/changeCartQuantity";
import { RemoveFromCartButton } from "@/features/cart/removeFromCartButton";

export const CartList = () => {
  const cartProducts = useCartProductStore((state) => state.cartProducts);

  const cartProductsArray = Object.values(cartProducts);

  return (
    <div className="col-span-2 flex flex-col gap-4">
      {cartProductsArray.map((cartProduct) => (
        <CartProductCard
          key={cartProduct.id}
          cartProduct={cartProduct}
          footerSlot={
            <div className="flex items-center justify-end gap-2">
              <RemoveFromCartButton productId={cartProduct.id} />
              <ChangeCartQuantity product={cartProduct} />
            </div>
          }
        />
      ))}
    </div>
  );
};
