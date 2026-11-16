import axios from "axios";

import api from "../api";

import type {
  ProductResponse,
} from "../../types/interface/cart.interface";

export const getProductsFns = async (): Promise<ProductResponse> => {
  try {
    const response = await api.get<ProductResponse>("/products");

    return response.data;
  } catch (error) {
    console.log("Error from fetching products:", error);

    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || error.message
      );
    }

    throw error;
  }
};