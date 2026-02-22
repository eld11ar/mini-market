import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { ProductPresenter } from "@/entities/product";
import type { CartProduct } from "./types";

interface CartProductState {
  cartProducts: Record<number, CartProduct>;
}

interface CartProductActions {
  addToCart: (product: ProductPresenter) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;

  onUpdateQuantity: (productId: number, quantity: number) => void;

  totalCartProducts: () => number;
  totalCartPrice: () => number;
}

const cardProductState: CartProductState = {
  cartProducts: {},
};

export const useCartProductStore = create<
  CartProductState & CartProductActions
>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...cardProductState,
        addToCart: (product) =>
          set((state) => {
            const existingProduct = state.cartProducts[product.id];

            if (existingProduct) {
              state.cartProducts[product.id].quantity += 1;
            } else {
              state.cartProducts[product.id] = { ...product, quantity: 1 };
            }
          }),
        removeFromCart: (productId) => set((state) => {
          delete state.cartProducts[productId];
        }),
        clearCart: () => set(() => cardProductState),

        onUpdateQuantity: (productId, quantity) => set((state) => {
          if (quantity <= 0) {
            delete state.cartProducts[productId];
          } else {
            state.cartProducts[productId].quantity = quantity;
          }
        }),

        totalCartProducts: () => Object.values(get().cartProducts).reduce((total, item) => total + item.quantity, 0),

        totalCartPrice: () => Object.values(get().cartProducts).reduce((total, item) => total + item.price * item.quantity, 0),
      })),
      {
        version: 1,
        name: "cart-storage",
        partialize: (state) => ({ cartProducts: state.cartProducts }),
      },
    ),
  ),
);
