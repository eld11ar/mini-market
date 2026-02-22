import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { ProductPresenter } from "../../model/types";
import { Badge } from "@/shared/ui/badge";
import { StarRating } from "@/shared/ui/star-rating";
import { productsProcessor } from "../../lib/processor";

type Props = {
  product: ProductPresenter;
};

export const ProductCard = ({ product }: Props) => {
  const detailsLink = `/products/${product.id}`;

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={detailsLink}
        className="bg-gray-100 rounded-2xl p-3 overflow-hidden"
      >
        <div className="relative w-77 h-75 mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            fill
            placeholder="blur"
            blurDataURL={product.image}
            className="object-contain object-center"
          />
        </div>
      </Link>
      <div className="flex-1 flex flex-col gap-1 justify-between">
        <Badge variant="secondary" className="capitalize">
          {product.category}
        </Badge>

        <Link
          href={detailsLink}
          className={cn(
            "font-medium leading-5 line-clamp-2 text-balance underline decoration-transparent",
            "transition-all duration-300 hover:decoration-primary hover:underline-offset-4",
          )}
        >
          {product.title}
        </Link>

        <StarRating rate={product.rate} count={product.count} />

        <span className="font-bold">
          {productsProcessor.formatPrice(product.price)}
        </span>
      </div>
    </div>
  );
};
