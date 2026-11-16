import type { Product } from "./cart.interface";

export interface ProductState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  isLoading: boolean;
  isError: string | null;
}

export interface ProductContextType extends ProductState {
  fetchProducts: () => Promise<void>;
}