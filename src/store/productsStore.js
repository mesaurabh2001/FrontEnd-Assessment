import { create } from "zustand";
import axios from "axios";

const useProductsStore = create((set) => ({
  products: [],
  selectedProduct: null,
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://dummyjson.com/products");
      set({ products: res.data.products, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      set({ selectedProduct: res.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

export default useProductsStore;
