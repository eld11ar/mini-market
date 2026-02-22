import { useMemo } from "react";
import type {
  ProductPresenter,
  ProductPresenterSortOption,
} from "@/entities/product";

export const useSortProducts = (
  products: ProductPresenter[],
  sort: ProductPresenterSortOption,
) => {
  return useMemo(() => {
    return products.toSorted((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rate - a.rate;
        case "rating-asc":
          return a.rate - b.rate;
        case "alphabetical-asc":
          return a.title.localeCompare(b.title);
        case "alphabetical-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [products, sort]);
};
