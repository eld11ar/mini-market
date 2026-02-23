import type { Metadata } from "next";
import { ProductList } from "@/widgets/ProductList";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Browse all available products with up-to-date pricing and detailed descriptions",
};

export default async function ProductsPage() {
  return (
    <section className="py-8 sm:py-14 space-y-8 sm:space-y-12">
      <div className="space-y-1.5 text-center">
        <h1 className="text-xl sm:text-2xl font-bold">Products</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Here you can see all available products
        </p>
      </div>

      <ProductList />
    </section>
  );
}
