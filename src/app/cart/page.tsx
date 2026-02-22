import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CartView } from "@/widgets/CartList";

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
