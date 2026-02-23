import type { Category } from "@/entities/category";
import { API_BASE_URL } from "@/shared/api/base";
import type { Product } from "./types";

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
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 60 },
    });
    return await res.json();
  },
};
