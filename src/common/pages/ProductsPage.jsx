import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { fetchAllProducts } from "../../features/product/productSlice";
import "../../style/ProductsPage.css";

export default function ProductsPage() {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === "loading...") {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      <div className="products-container">
        {products?.map((product, index) => {
          return (
            <div key={product?.id} className="card-container">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={product?.image}
                  alt={product?.title}
                />
              </div>

              <div className="card-body">
                <h3 className="product-name">{product?.title}</h3>
                <p className="product-description">{product?.description}</p>
                <div className="product-figures">
                  <span className="product-price">
                    KES. {product?.price}.00
                  </span>
                  <span className="product-discount">
                    {product?.discount}% discount
                  </span>
                </div>

                <div className="product-actions">
                  <button
                    className="btn-add-to-cart"
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    Add To Cart
                  </button>
                  <button className="btn-delete-product">DELETE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
