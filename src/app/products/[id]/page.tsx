import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productsApi, productsProcessor } from "@/entities/product";
import { ChangeCartQuantity } from "@/features/cart/changeCartQuantity";
import { Badge } from "@/shared/ui/badge";
import { StarRating } from "@/shared/ui/star-rating";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await productsApi.get(Number(id));
  const presenter = productsProcessor.toPresenter(product);

  return {
    title: `${presenter.title} | Product Catalog`,
    description: presenter.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await productsApi.get(Number(id));

  const presenter = productsProcessor.toPresenter(product);

  return (
    <section className="space-y-8 sm:space-y-12 py-8 sm:py-14">
      <Link
        href="/products"
        className="w-fit flex items-center gap-2 text-xl sm:text-2xl font-bold"
      >
        <ArrowLeft /> <span>Products</span>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 sm:gap-12 lg:gap-20">
        <div className="flex items-center justify-center bg-gray-100 rounded-2xl p-6">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <Image
              src={presenter.image}
              alt={presenter.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={presenter.image}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <Badge>{presenter.category}</Badge>

          <h1 className="text-xl sm:text-2xl font-medium">{presenter.title}</h1>

          <StarRating rate={presenter.rate} count={presenter.count} />

          <span className="text-xl font-medium">
            {productsProcessor.formatPrice(presenter.price)}
          </span>

          <p className="text-sm sm:text-base text-muted-foreground">
            {presenter.description}
          </p>

          <ChangeCartQuantity
            product={presenter}
            size="large"
            className="justify-center sm:justify-start"
          />
        </div>
      </div>
    </section>
  );
}
