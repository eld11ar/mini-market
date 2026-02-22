import type { Category } from "@/entities/category";

export type ProductId = Brand<Id, "ProductId">;

export type ProductPresenter = {
  id: ProductId;
  title: string;
  price: Penny;
  description: string;
  category: Category;
  image: Url;
  rate: number;
  count: number;
};

export type ProductPresenterSortOption =
  | "alphabetical-asc"
  | "alphabetical-desc"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "rating-asc";

export type ProductPresenterSortOptionConfig = {
  value: ProductPresenterSortOption;
  label: string;
};
