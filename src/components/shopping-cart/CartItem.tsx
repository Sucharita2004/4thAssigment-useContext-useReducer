import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import { useCart } from "../../hooks/useCart";
import type { CartItem as CartItemType } from "../../types/interface/cart.interface";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const {
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
       <h3 className="font-bold text-[#123B3A]">
  {item.title}
</h3>

        <p className="mt-1 text-sm text-gray-500">
          ₹{item.price.toLocaleString("en-IN")} * {item.quantity}
        </p>

        <p className="mt-1 font-semibold text-[#123B3A]">
          Subtotal: ₹
          {(item.price * item.quantity).toLocaleString("en-IN")}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => decreaseQty(item.id)}
          aria-label="Decrease quantity"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-[#123B3A] transition hover:bg-gray-200"
        >
          <FiMinus />
        </button>

        <span className="min-w-5 text-center font-semibold">
          {item.quantity}
        </span>

        <button
          type="button"
          onClick={() => increaseQty(item.id)}
          aria-label="Increase quantity"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-[#123B3A] transition hover:bg-gray-200"
        >
          <FiPlus />
        </button>

        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="ml-2 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
        >
          <FiTrash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;