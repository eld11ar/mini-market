import { ArrowLeft } from "lucide-react";
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

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await productsApi.get(Number(id));

  const presenter = productsProcessor.toPresenter(product);

  return (
    <section className="space-y-10 py-14">
      <Link
        href="/products"
        className="w-fit flex items-center gap-2 text-2xl font-bold"
      >
        <ArrowLeft /> <span>Products</span>
      </Link>

      <div className="grid grid-cols-2 items-start gap-20">
        <div className="flex items-center justify-center">
          <div className="relative min-w-[348px] h-[422px]">
            <Image
              src={presenter.image}
              alt={presenter.title}
              fill
              placeholder="blur"
              blurDataURL={presenter.image}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Badge>{presenter.category}</Badge>

          <h1 className="text-2xl font-medium">{presenter.title}</h1>

          <StarRating rate={presenter.rate} count={presenter.count} />

          <span className="text-xl font-medium">
            {productsProcessor.formatPrice(presenter.price)}
          </span>

          <p className="text-muted-foreground">{presenter.description}</p>

          <ChangeCartQuantity product={presenter} size="large" />
        </div>
      </div>
    </section>
  );
}
