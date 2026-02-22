import { Minus, Plus } from "lucide-react";
import { useCartProductStore } from "@/entities/cart";
import type { ProductId } from "@/entities/product";
import { Button } from "@/shared/ui/button";

type Props = {
  productId: ProductId;
};

export const ChangeCartQuantity = ({ productId }: Props) => {
  const onUpdateQuantity = useCartProductStore(
    (state) => state.onUpdateQuantity,
  );
  const item = useCartProductStore((state) => state.cartProducts[productId]);

  return (
    <div className="flex items-center gap-1">
      <Button
        type="button"
        size="icon-sm"
        variant="outline"
        onClick={() => onUpdateQuantity(productId, item.quantity - 1)}
      >
        <Minus />
      </Button>
      <span className="w-6 text-center text-sm font-semibold">
        {item.quantity}
      </span>
      <Button
        type="button"
        size="icon-sm"
        variant="outline"
        onClick={() => onUpdateQuantity(productId, item.quantity + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
};
