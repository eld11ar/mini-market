import type { Metadata } from "next";
import { ClearCartButton } from "@/features/cart/clearCartButton";
import { BackButton } from "@/shared/ui/back-button";
import { CartView } from "@/widgets/CartList";

export const metadata: Metadata = {
  title: "Shopping Cart | Store Name",
  description:
    "Review the products in your cart, update quantities, and proceed to checkout.",
};

export default function CartPage() {
  return (
    <section className="py-8 sm:py-14 space-y-8 sm:space-y-12">
      <div className="flex items-center justify-between">
        <BackButton label="Your Cart" />

        <ClearCartButton />
      </div>

      <CartView />
    </section>
  );
}
