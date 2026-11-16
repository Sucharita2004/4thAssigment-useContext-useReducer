import { useCart } from "../../hooks/useCart";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingCart,
} from "react-icons/fi";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center">

        <FiShoppingCart
          size={50}
          className="mx-auto mb-4 text-[#26817B]"
        />

        <h2 className="text-xl font-bold text-[#123B3A]">
          Your Cart is Empty
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Add your favourite products to the cart.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-4">

      <h2 className="mb-5 text-xl font-bold text-[#123B3A]">
        Cart Items ({cartItems.length})
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
        >

          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-24 w-full rounded-xl bg-gray-50 object-contain sm:w-24"
          />

          <div className="flex-1">

            <h3 className="font-bold text-[#123B3A]">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              ${item.price.toFixed(2)} each
            </p>

            <p className="mt-2 font-bold text-[#123B3A]">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => decreaseQty(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-[#123B3A] hover:bg-[#A7F3D0]"
            >
              <FiMinus />
            </button>

            <span className="min-w-5 text-center font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQty(item.id)}
              disabled={item.quantity >= item.stock}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-[#123B3A] hover:bg-[#A7F3D0] disabled:opacity-40"
            >
              <FiPlus />
            </button>

            <button
              onClick={() => removeItem(item.id)}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              <FiTrash2 />
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Cart;