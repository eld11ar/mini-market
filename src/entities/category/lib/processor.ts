import type { Category } from "../api/types";

export const categoriesProcessor = {
  toSelectOptions(categories: Category[]) {
    return categories.map((category) => ({
      value: category,
      label: category,
    }));
  },
};
