import type { ProductPresenter } from "@/entities/product";

export type CartProduct = ProductPresenter & { quantity: number };
