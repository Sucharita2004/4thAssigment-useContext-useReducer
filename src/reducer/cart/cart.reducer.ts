import type {
  CartState,
  CartAction,
} from "../../types/interface/cart.interface";

export const cartInitialValue: CartState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = cartInitialValue,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity:
                    item.quantity < item.stock
                      ? item.quantity + 1
                      : item.quantity,
                }
              : item
          ),
        };
      }

      if (action.payload.stock <= 0) {
        return state;
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity < item.stock
                    ? item.quantity + 1
                    : item.quantity,
              }
            : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};