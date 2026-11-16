export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number }
  | { type: "CLEAR_CART" };

export interface CartContextType extends CartState {
  cartCount: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
}