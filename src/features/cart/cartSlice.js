import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: sessionStorage.getItem("cartItems")
      ? JSON.parse(sessionStorage.getItem("cartItems"))
      : [],
    cartQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }

      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItem(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      // total: parseFloat(total.toFixed(2));
      state.cartQuantity = quantity;
      state.totalAmount = total.toFixed(2);
    },
    clearCart(state, action) {
      state.cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // increaseAmount: (state, { payload }) => {
    //   let singleItem = state.cartItems.find((item) => item.id === payload);
    //   singleItem.amount = singleItem.amount + 1;
    // },
    // decreaseAmount: (state, { payload }) => {
    //   let singleItem = state.cartItems.find((item) => item.id === payload);
    //   singleItem.amount = singleItem.amount - 1;
    // },
    // calculateTotal: (state) => {
    //   state.quantity = state.cartItems.reduce(
    //     (sum, item) => sum + item.amount,
    //     0
    //   );
    //   state.total = state.cartItems.reduce(
    //     (sum, item) => sum + item.amount * item.price,
    //     0
    //   );
    // },
    // removeItem: (state, { payload }) => {
    //   state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    // },
    // clearCart: (state) => {
    //   state.cartItems = [];
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decreaseCart, getTotals, clearCart, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
