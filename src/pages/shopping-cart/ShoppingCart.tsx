import { FiShoppingCart } from "react-icons/fi";

import ProductList from "../../components/shopping-cart/ProductList";
import Cart from "../../components/shopping-cart/Cart";
import CartSummary from "../../components/shopping-cart/CartSummary";

const ShoppingCart = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <FiShoppingCart className="text-3xl text-[#123B3A]" />

          <div>
            <h1 className="text-3xl font-bold text-[#123B3A]">
              Shopping Cart
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Choose your favourite products.
            </p>
          </div>
        </div>

        <ProductList />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <Cart />
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;