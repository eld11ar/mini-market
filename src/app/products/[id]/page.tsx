import { productsApi } from "@/entities/product";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await productsApi.get(Number(id));

  return (
    <section className="py-14">

    </section>
  );
}
