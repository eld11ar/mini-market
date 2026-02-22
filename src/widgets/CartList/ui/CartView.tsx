import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";

export const CartView = () => {
  return (
    <section className="grid grid-cols-3 place-items-start gap-24">
      <CartList />

      <CartTotal />
    </section>
  );
}