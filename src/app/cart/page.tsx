import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CartView } from "@/widgets/CartList";

export const metadata: Metadata = {
  title: "Shopping Cart | Store Name",
  description:
    "Review the products in your cart, update quantities, and proceed to checkout.",
};

export default function CartPage() {
  return (
    <section className="py-14 space-y-8">
      <Link
        href="/products"
        className="w-fit flex items-center gap-2 text-2xl font-bold"
      >
        <ArrowLeft /> <span>Your Cart</span>
      </Link>

      <CartView />
    </section>
  );
}
