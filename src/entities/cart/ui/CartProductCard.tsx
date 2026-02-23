import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { productsProcessor } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import type { CartProduct } from "../model/types";

type Props = {
  cartProduct: CartProduct;
  footerSlot?: ReactNode;
};

export const CartProductCard = ({ cartProduct, footerSlot }: Props) => {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <div className="relative w-20 h-20 sm:w-24 sm:h-28 bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={cartProduct.image}
          alt={cartProduct.title}
          fill
          sizes="(max-width: 640px) 80px, 100px"
          className="object-contain p-1"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2 py-1 sm:py-2 border-b">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1 sm:gap-2">
            <Link
              href={`/products/${cartProduct.id}`}
              className={cn(
                "text-pretty line-clamp-2 font-medium leading-tight underline decoration-transparent",
                "hover:decoration-primary transition-colors",
              )}
            >
              {cartProduct.quantity} X {cartProduct.title}
            </Link>

            <p className="text-pretty text-xs sm:text-sm line-clamp-2 text-muted-foreground">
              {cartProduct.description}
            </p>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            {productsProcessor.formatPrice(
              cartProduct.price * cartProduct.quantity,
            )}
          </p>
        </div>

        {footerSlot}
      </div>
    </div>
  );
};
