import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
