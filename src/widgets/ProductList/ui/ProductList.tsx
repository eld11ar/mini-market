"use client";

import { type ComponentProps, useState } from "react";
import type { Category } from "@/entities/category/api/types";
import {
  ProductCard,
  type ProductPresenterSortOption,
} from "@/entities/product";
import { CategoryFilter } from "@/features/product/categoryFilter";
import { SortFilter } from "@/features/product/sortFilter/ui/SortFilter";
import { cn } from "@/shared/lib/utils";
import { useGetProducts } from "../lib/useGetProducts";
import { useSortProducts } from "../lib/useSortProducts";
import { ProductSkeleton } from "./ProductSkeleton";

type Props = ComponentProps<"div"> & {};

export const ProductList = ({ className, ...rest }: Props) => {
  const [category, setCategory] = useState<Nullable<Category>>(null);
  const [sort, setSort] = useState<ProductPresenterSortOption>("price-asc");

  const { productsPresenterList, isLoading } = useGetProducts(category);

  const sorted = useSortProducts(productsPresenterList, sort);

  return (
    <div className={cn("space-y-4", className)} {...rest}>
      <div className="flex items-center justify-between gap-4">
        <CategoryFilter value={category} onChange={setCategory} />

        <SortFilter value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-4 gap-y-10 gap-x-8">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: false
            <ProductSkeleton key={i} />
          ))
          : sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};
