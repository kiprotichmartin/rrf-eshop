import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductCardContainer() {
  const { productList, isLoading, error } = useSelector((state) => state);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h2>Loading...</h2>
  //     </div>
  //   );
  // }

  // if (!isLoading) {
  //   return (
  //     <div>
  //       <h2>{error}</h2>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="products-container">pcc
        {/* {productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))} */}
        <ProductCard/>
      </div>
    </>
  );
}
