import { API_BASE_URL } from "@/shared/api/base";
import type { Category } from "./types";

export const categoriesApi = {
  async getAll(): Promise<Category[]> {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    return await response.json();
  },
};
