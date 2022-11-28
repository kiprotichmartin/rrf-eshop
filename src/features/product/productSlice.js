import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (args, thunkAPI) => {
    try {
      let products = [];
      const docsSnap = await getDocs(collection(db, "products"));
      docsSnap.forEach((doc) => {
        const data = doc.data();
        products.push({ id: doc.id, ...data });
      });
      return { products };
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const addOneProduct = createAsyncThunk(
  "products/addOneProduct",
  async (newProducts, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "products"), newProducts);
      // console.log("Document written with ID: ", docRef.id);
      alert('Product added successfully');
      return {};
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "successful";
        state.products = action.payload.products;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message.error;
      })
      .addCase(addOneProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addOneProduct.fulfilled, (state, action) => {
        state.status = "successful";
        // state.products = action.payload.products;
      })
      .addCase(addOneProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message.error;
      });
  },
});

export default productSlice.reducer;
