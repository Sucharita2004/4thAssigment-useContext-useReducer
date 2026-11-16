import { createContext } from "react";

import type { CartContextType } from "../../types/interface/cart.interface";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
