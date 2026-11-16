import { useCart } from "../../hooks/useCart";

import {
  FiShoppingBag,
  FiTag,
  FiTrash2,
} from "react-icons/fi";

const CartSummary = () => {
  const {
    cartCount,
    totalPrice,
    clearCart,
    cartItems,
  } = useCart();

  return (
    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-extrabold text-[#123B3A]">
        Order Summary
      </h2>

      <div className="mb-4 flex justify-between text-sm text-gray-500">

        <span className="flex items-center gap-2">
          <FiShoppingBag />
          Total Items
        </span>

        <span className="font-semibold text-gray-800">
          {cartCount}
        </span>

      </div>

      <div className="mb-4 flex justify-between text-sm text-gray-500">

        <span className="flex items-center gap-2">
          <FiTag />
          Subtotal
        </span>

        <span className="font-semibold text-gray-800">
          ${totalPrice.toFixed(2)}
        </span>

      </div>

      <div className="mb-5 flex justify-between border-t border-gray-200 pt-5">

        <span className="font-bold text-[#123B3A]">
          Total Price
        </span>

        <span className="text-2xl font-extrabold text-[#123B3A]">
          ${totalPrice.toFixed(2)}
        </span>

      </div>

      <button
        disabled={cartItems.length === 0}
        className="w-full rounded-xl bg-[#123B3A] py-3 font-bold text-white transition hover:bg-[#1B5754] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Proceed to Checkout
      </button>

      <button
        onClick={clearCart}
        disabled={cartItems.length === 0}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiTrash2 />
        Clear Cart
      </button>

    </div>
  );
};

export default CartSummary;