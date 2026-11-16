import type { Product } from "../interface/cart.interface";

export type CartAction =
  | {
      type: "ADD_ITEM";
      payload: Product;
    }
  | {
      type: "REMOVE_ITEM";
      payload: number;
    }
  | {
      type: "INCREASE_QTY";
      payload: number;
    }
  | {
      type: "DECREASE_QTY";
      payload: number;
    }
  | {
      type: "CLEAR_CART";
    };

    