import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../../utils/firebase";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  loading: false,
  error: false,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (args, thunkAPI) => {
    try {
      let cartItems = [];
      const docsSnap = await getDocs(collection(db, "CartItems"));
      docsSnap.forEach((doc) => {
        const data = doc.data();
        cartItems.push({ id: doc.id, ...data });
      });
      return { cartItems };
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (newProducts, thunkAPI) => {
    try {
      await addDoc(collection(db, "CartItems"), newProducts);
      alert("Added Successfully");
      return {};
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (item, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "CartItems", item));
      alert("Cart Item Deleted Successfully");
      return {};
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const clearAllFromCart = createAsyncThunk(
  "cart/clearAllFromCart",
  async (data, thunkAPI) => {
    try {
      const batch = writeBatch(db);
      const laRef = doc(db, "CartItems", data);
      batch.delete(laRef);
      await batch.commit();
      alert("Added Successfully");
      return {};
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.cartItems;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
