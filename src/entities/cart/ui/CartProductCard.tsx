import Image from "next/image";
import Link from "next/link";
import { productsProcessor } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import type { CartProduct } from "../model/types";

type Props = {
  cartProduct: CartProduct;
  footerSlot?: React.ReactNode;
};

export const CartProductCard = ({
  cartProduct,
  footerSlot
}: Props) => {
  return (
    <div className="flex items-center gap-6">
      <div className="relative min-w-25 h-33.25 bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={cartProduct.image}
          alt={cartProduct.title}
          fill
          sizes="100px"
          className="object-contain p-1"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2 py-2 border-b">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Link
              href={`/product/${cartProduct.id}`}
              className={cn(
                "text-pretty line-clamp-2 font-medium leading-tight underline decoration-transparent",
                "hover:decoration-primary transition-colors",
              )}
            >
              {cartProduct.quantity} X {cartProduct.title}
            </Link>

            <p className="text-pretty text-sm line-clamp-2 text-muted-foreground">{cartProduct.description}</p>
          </div>

          <p className="text-sm text-muted-foreground">
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
