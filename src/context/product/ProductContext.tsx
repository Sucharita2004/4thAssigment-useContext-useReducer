import { createContext } from "react";

import type {
  ProductContextType,
} from "../../types/interface/product.interface";

export const ProductContext = createContext<
  ProductContextType | undefined
>(undefined);