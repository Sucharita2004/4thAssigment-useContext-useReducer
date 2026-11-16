import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { ProductContext } from "./ProductContext";

import { getProductsFns } from "../../api/api-functions/cart-function";

import type {
  ProductState,
} from "../../types/interface/product.interface";

const ProductInitialState: ProductState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  isLoading: true,
  isError: null,
};

const ProductProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [productState, setProductState] =
    useState<ProductState>(ProductInitialState);

  const fetchProducts = async () => {
    try {
      setProductState((prevState) => ({
        ...prevState,
        isLoading: true,
        isError: null,
      }));

      const response = await getProductsFns();

      console.log("Product API Response:", response);

      if (response.products && response.products.length > 0) {
        setProductState({
          products: response.products,
          total: response.total,
          skip: response.skip,
          limit: response.limit,
          isLoading: false,
          isError: null,
        });
      } else {
        setProductState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log("Product Fetch Error:", error);

      setProductState((prevState) => ({
        ...prevState,
        isLoading: false,
        isError:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      }));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...productState,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;