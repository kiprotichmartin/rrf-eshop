import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectAllProducts,
  getProductsStatus,
  getProductsError,
  fetchProducts,
} from "./productSlice";
import { addToCart } from "../cart/cartSlice";

export default function ProductCard({
  id,
  title,
  description,
  image,
  discount,
  price,
}) {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);
  const navigate = useNavigate();

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [products, dispatch]);

  const handleCartSubmit = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  let content;

  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    content = products.map((product) => {
      return (
        <section className="product-card-container">
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
              <span className="product-price">{product?.price}</span>
              <span className="product-discount">{product?.discount}</span>
            </div>

            <div className="product-actions">
              <button
                className="product-btn btn-cart"
                onClick={() => handleCartSubmit(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      );
    });
  } else if (productStatus === "failed") {
    content = <p>Error : {error}</p>;
  }
  return (
    <div>
      {content}
    </div>
  );
}
