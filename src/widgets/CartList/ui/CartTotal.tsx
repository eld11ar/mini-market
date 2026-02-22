'use client'

import { useCartProductStore } from "@/entities/cart";
import { productsProcessor } from "@/entities/product";
import { Button } from "@/shared/ui/button";

export const CartTotal = () => {
  const cartProducts = useCartProductStore((state) => state.cartProducts);
  const totalPrice = useCartProductStore((state) => state.totalCartPrice());

  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
      <div className="space-y-1">
        <h2 className="text-xl font-bold">Your Cart</h2>

        <ul className="space-y-1 border-b">
          {Object.values(cartProducts).map((cartProduct) => (
            <li
              key={cartProduct.id}
              className="flex justify-between gap-1.5 py-2 text-sm text-pretty border-b last:border-b-0"
            >
              <span>{cartProduct.quantity} x {cartProduct.title}</span>
              <span className="text-muted-foreground">{productsProcessor.formatPrice(cartProduct.price * cartProduct.quantity)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>{productsProcessor.formatPrice(totalPrice)}</span>
      </div>

      <Button className="w-full" size="lg" disabled={totalPrice === 0}>
        Place an order
      </Button>
    </div>
  )
}