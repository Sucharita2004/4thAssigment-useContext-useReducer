import ProductCard from "./ProductCard";

import { useCart } from "../../hooks/useCart";

import {
  FiPackage,
  FiRefreshCw,
} from "react-icons/fi";
import { useProduct } from "../../hooks/UseProduct";

const ProductList = () => {
  const {
    products,
    isLoading,
    isError,
    fetchProducts,
  } = useProduct();

  const { addItem } = useCart();

  if (isLoading) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#123B3A]" />

        <p className="font-semibold text-[#123B3A]">
          Loading Products...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center gap-4">
        <FiPackage size={45} className="text-red-400" />

        <p className="font-semibold text-red-500">
          {isError}
        </p>

        <button
          onClick={fetchProducts}
          className="flex items-center gap-2 rounded-xl bg-[#123B3A] px-5 py-3 font-semibold text-white transition hover:bg-[#1B5754]"
        >
          <FiRefreshCw />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#123B3A]">
            Explore Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Choose your favourite products.
          </p>
        </div>

        <span className="rounded-full bg-[#A7F3D0] px-4 py-2 text-sm font-bold text-[#123B3A]">
          {products.length} Products
        </span>
      </div>

      {products.length === 0 ? (
        <p className="py-10 text-center text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addItem}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;