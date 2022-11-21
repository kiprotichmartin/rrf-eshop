import React from "react";
import { useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "./cartSlice";

export default function CartItem() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <h3>God of War 4</h3>
        <p>
          A thriller game based off of Norse mythology and the antaganosit
          Kratos
        </p>
        <div>
          <span>Ksh 2000</span>
          <span>20% off</span>
        </div>
      </div>

      <div>
        <button onClick={() => dispatch(increaseAmount())}>+</button>
        <span>2</span>
        <button onClick={() => dispatch(decreaseAmount())}>+</button>
      </div>
    </div>
  );
}
