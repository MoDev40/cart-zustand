import axios, { AxiosError } from "axios";
import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
};

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: AxiosError | null;
  fetchProducts: (page: number) => Promise<void>;
}

type ResponseBody = {
  status: string;
  message: string;
  products: Product[];
};

const productSlice = (set: any) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async (page: number | 1) => {
    try {
      set(() => ({
        isLoading: true,
      }));

      const { data } = await axios.get<ResponseBody>(
        `https://fakestoreapi.in/api/products?page=${page}`
      );

      set(() => ({
        products: data.products,
        error: null,
        isLoading: false,
      }));
    } catch (error) {
      set(() => ({
        error,
        isLoading: false,
      }));
    }
  },
});

const useProducts = create<ProductState>(productSlice);

export default useProducts;
