import type { Category } from "@/entities/category";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}
