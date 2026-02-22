import { Product } from "../api/types";
import type {
  ProductId,
  ProductPresenter,
  ProductPresenterSortOptionConfig,
} from "../model/types";

const SORT_OPTIONS: ProductPresenterSortOptionConfig[] = [
  { value: "alphabetical-asc", label: "Alphabetically, A-Z" },
  { value: "alphabetical-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, Low To High" },
  { value: "price-desc", label: "Price, High to Low" },
  { value: "rating-desc", label: "Rating, Best First" },
  { value: "rating-asc", label: "Rating, Lowest First" },
];

export const productsProcessor = {
  formatPrice(price: Penny) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  },

  toSortOptions() {
    return SORT_OPTIONS;
  },

  toPresenter(product: Product): ProductPresenter {
    return {
      id: product.id as ProductId,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rate: product.rating.rate,
      count: product.rating.count,
    };
  },

  toPresenterList(products: Product[]): ProductPresenter[] {
    return products.map(productsProcessor.toPresenter);
  },
};
