import { useQuery } from "@tanstack/react-query";
import type { Category } from "@/entities/category";
import { productQueries, productsProcessor } from "@/entities/product";

export const useGetProducts = (category?: Nullable<Category>) => {
  const { data, ...rest } = useQuery(productQueries.list(category));

  const products = data ?? [];
  const productsPresenterList = productsProcessor.toPresenterList(products);

  return {
    ...rest,
    products,
    productsPresenterList,
  };
};
