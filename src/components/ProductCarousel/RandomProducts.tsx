import React from "react";
import { useGetRandomProducts } from "../Hooks/useGetRandomProducts";
import Spinner from "../Spinner/Spinner";
import ProductCarousel from "./ProductCarousel";

const RandomProducts = () => {
  const { data, isLoading, isError } = useGetRandomProducts();
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  if (isError || !data) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ProductCarousel products={data} />
    </div>
  );
};

export default RandomProducts;
