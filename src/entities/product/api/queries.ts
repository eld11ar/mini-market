import { Category } from "@/entities/category";
import { ProductId } from "../model/types";
import { queryOptions } from "@tanstack/react-query";
import { productsApi } from "./api";

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (category?: Nullable<Category>) =>
    [...productKeys.lists(), { category }] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: ProductId) => [...productKeys.details(), id] as const,
};

export const productQueries = {
  list: (category?: Nullable<Category>) =>
    queryOptions({
      queryKey: productKeys.list(category),
      queryFn: () =>
        category
          ? productsApi.getProductsByCategory(category)
          : productsApi.getAll(),
    }),

  detail: (id: ProductId) =>
    queryOptions({
      queryKey: productKeys.detail(id),
      queryFn: () => productsApi.get(id),
    }),
};
