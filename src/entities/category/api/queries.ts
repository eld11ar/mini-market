import { queryOptions } from "@tanstack/react-query";
import { categoriesApi } from "./api";

export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
};

export const categoryQueries = {
  list: () =>
    queryOptions({
      queryKey: categoryKeys.lists(),
      queryFn: () => categoriesApi.getAll(),
      staleTime: 5 * 60 * 1000,
    }),
};
