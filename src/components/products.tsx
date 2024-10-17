import { useEffect } from "react";
import useProducts from "@/store/productsSlice";
import Product from "@/components/product";
import ProductSkeleton from "./skeleton";

const Products = () => {
  const { products, isLoading, fetchProducts, error } = useProducts();

  useEffect(() => {
    fetchProducts(1);
  }, []);

  if (error) return <div>{JSON.stringify(error)}</div>;

  return isLoading ? (
    <div className="container grid grid-cols-3 gap-4 p-3 mx-auto">
      {Array.from({ length: 12 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  ) : (
    <div className="container grid grid-cols-3 gap-4 p-3 mx-auto">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
