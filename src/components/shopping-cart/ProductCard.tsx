import type { Product } from "../../types/interface/cart.interface";

import {
  FiShoppingCart,
  FiStar,
  FiPackage,
} from "react-icons/fi";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({
  product,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#F5F8F7] p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#123B3A] px-3 py-1 text-xs font-semibold capitalize text-white">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            <FiStar className="fill-amber-400" />
            {product.rating}
          </span>

          <span className="flex items-center gap-1 text-xs text-gray-500">
            <FiPackage />
            Stock: {product.stock}
          </span>
        </div>

        <h2 className="mb-2 line-clamp-1 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mb-5 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <h3 className="text-xl font-extrabold text-[#123B3A]">
              ${product.price.toFixed(2)}
            </h3>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock <= 0}
            className="flex items-center gap-2 rounded-xl bg-[#123B3A] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1B5754] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FiShoppingCart size={17} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;