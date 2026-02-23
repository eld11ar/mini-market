import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { StarRating } from "@/shared/ui/star-rating";
import { productsProcessor } from "../lib/processor";
import type { ProductPresenter } from "../model/types";

type Props = ComponentProps<"div"> & {
  product: ProductPresenter;
  onAddToCartAction?: ReactNode;
};

export const ProductCard = ({
  product,
  onAddToCartAction,
  className,
  ...rest
}: Props) => {
  const detailsLink = `/products/${product.id}`;

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-4", className)} {...rest}>
      <Link
        href={detailsLink}
        className="group bg-gray-100 rounded-2xl p-3 sm:p-4 gap-3 sm:gap-4 overflow-hidden"
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={product.image}
            className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between gap-1.5 sm:gap-2">
        <Badge
          variant="secondary"
          className="capitalize w-fit text-xs sm:text-sm"
        >
          {product.category}
        </Badge>

        <Link
          href={detailsLink}
          className={cn(
            "text-sm sm:text-base font-medium leading-5 line-clamp-2 text-balance underline decoration-transparent",
            "transition-all duration-300 hover:decoration-primary hover:underline-offset-4",
          )}
        >
          {product.title}
        </Link>

        <StarRating rate={product.rate} count={product.count} />

        <span className="text-base sm:text-lg font-bold">
          {productsProcessor.formatPrice(product.price)}
        </span>
      </div>

      {onAddToCartAction}
    </div>
  );
};
