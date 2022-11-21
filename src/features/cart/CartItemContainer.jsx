import React from "react";
import { CartItem } from "./cartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

export default function CartItemContainer() {
  const { cartItems, quantity, total, isLoading, error } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div>
      <h3>Your Cart Items</h3>

      {!quantity && <h3>Your cart is empty 👎🏾</h3>}

      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>

      <div>
        <h5>Total</h5>
        <span>${total}</span>
      </div>

      <button
        className={quantity ? "btn btn-clear:active" : "btn btn-clear:disabled"}
        onClick={() => dispatch(clearCart())}
      ></button>
    </div>
  );
}
