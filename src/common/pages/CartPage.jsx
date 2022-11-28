import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../../style/CartPage.css";
import { calculateTotals, clearAllFromCart, clearCart, getCartItems } from "../../features/cart/cartSlice";
import emptycart from "../../assets/svg/empty-cart.jpg";

export default function CartPage() {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    setInterval(() => {
      dispatch(calculateTotals());
    }, 0);
  }, [dispatch]);

  const handleClearAllFromCart = (cartItems) => {
    dispatch(clearAllFromCart(cartItems));
  }

  if (amount < 1) {
    return (
      <section className="empty-cart">
        {/* <h2>your cart...</h2>
        <h4>...is currently empty</h4> */}
        <img src={emptycart} alt="cart is empty" />
      </section>
    );
  }

  return (
    <>
      <div className="cart-container">
        <header className="cart-header">
          <h3 className="cart-title">Your Items</h3>
        </header>
        <div className="cart-items-container">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer className="cart-footer">
          <button
            className={
              amount < 1 ? "btn-clear-cart disabled" : "btn-clear-cart"
            }
            onClick={() => handleClearAllFromCart(cartItems)}
          >
            Clear Cart<span> KES. {total.toFixed(2)}</span>
          </button>
        </footer>
      </div>
    </>
  );
}
