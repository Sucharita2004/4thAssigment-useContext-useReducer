import { useMemo, useReducer } from "react";
import type { ReactNode } from "react";

import { CartContext } from "./CartContext";

import type {
  Product,
} from "../../types/interface/cart.interface";

import {
  cartInitialValue,
  cartReducer,
} from "../../reducer/cart/cart.reducer";

const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartInitialValue
  );

  const addItem = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  const removeItem = (id: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increaseQty = (id: number) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const decreaseQty = (id: number) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const cartCount = useMemo(
    () =>
      cartState.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartState.cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartState.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cartState.cartItems]
  );

  return (
    <CartContext
      value={{
        ...cartState,
        cartCount,
        totalPrice,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;