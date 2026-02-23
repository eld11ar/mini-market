import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";

export const CartView = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 lg:gap-12">
      <CartList />

      <CartTotal />
    </section>
  );
};
