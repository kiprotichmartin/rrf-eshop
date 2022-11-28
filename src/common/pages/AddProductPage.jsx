import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneProduct, fetchAllProducts } from "../../features/product/productSlice";
import "../../style/AddProductPage.css";

export default function AddProductPage() {
  const [formInput, setFormInput] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value, amount:1 }));
    console.log(formInput);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newProducts = { ...formInput };
    dispatch(addOneProduct(newProducts));
    dispatch(fetchAllProducts());
  };

  return (
    <>
      <div className="add-product-container">
        <div className="add-product-section">
          <form className="add-product-form">
            <h2 className="add-product-title">Add your product</h2>
            <label
              className="add-product-label name-label"
              htmlFor="title-input"
            >
              Title:
            </label>
            <input
              className="add-product-input"
              type="text"
              name="title"
              id="title-input"
              placeholder="your product title here"
              onChange={handleChange}
            />

            <label
              className="add-product-label description-label"
              htmlFor="description-input"
            >
              Message:
            </label>
            <textarea
              className="add-product-input textarea"
              name="description"
              id="description-input"
              cols="30"
              rows="5"
              placeholder="Enter your product description here..."
              onChange={handleChange}
            ></textarea>

            <label
              className="add-product-label price-label"
              htmlFor="price-input"
            >
              Price:
            </label>
            <input
              className="add-product-input"
              type="number"
              name="price"
              id="price-input"
              placeholder="your product price here"
              onChange={handleChange}
            />

            <label
              className="add-product-label discount-label"
              htmlFor="discount-input"
            >
              Discount:
            </label>
            <input
              className="add-product-input"
              type="number"
              name="discount"
              id="discount-input"
              placeholder="your product discount here"
              onChange={handleChange}
            />

            <label
              className="add-product-label image-label"
              htmlFor="image-input"
            >
              Image URL:
            </label>
            <input
              className="add-product-input"
              type="url"
              name="image"
              id="image-input"
              placeholder="your image url here"
              onChange={handleChange}
            />
            <button
              className="btn-add-product"
              type="submit"
              onClick={handleClick}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
