import { API_BASE_URL } from "@/shared/api/base";
import { Product } from "./types";
import { Category } from "@/entities/category";

export const productsApi = {
  async getAll(): Promise<Product[]> {
    const res = await fetch(`${API_BASE_URL}/products`);
    return await res.json();
  },

  async getProductsByCategory(category: Category): Promise<Product[]> {
    const res = await fetch(
      `${API_BASE_URL}/products/category/${encodeURIComponent(category)}`,
    );
    return await res.json();
  },

  async get(id: number): Promise<Product> {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    return await res.json();
  },
};
