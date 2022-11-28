import React from "react";
import { removeItem, increase, decrease, removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../../style/CartItem.css";

export default function CartItem({
  id,
  image,
  title,
  price,
  amount,
  discount,
}) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <article key={id} className="cart-item-section">
      <div className="cart-image-container">
        <img className="cart-item-image" src={image} alt={title} />
      </div>
      <div className="cart-item-info">
        <h4 className="item-title">{title}</h4>
        <div className="item-figures">
          <p className="item-price">KES. {price}</p>
          <p className="item-discount">{discount}% discount</p>
        </div>
        <button
          className="btn-remove-item"
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          Remove
        </button>
      </div>
      <div className="cart-item-actions">
        <button
          className="btn-add-amount"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          +
        </button>
        <p className="item-amount">{amount}</p>
        <button
          className="btn-minus-amount"
          onClick={() => {
            if (amount === 1) {
              handleRemoveFromCart(id);
            }
            dispatch(decrease({ id }));
          }}
        >
          -
        </button>
      </div>
    </article>
  );
}
