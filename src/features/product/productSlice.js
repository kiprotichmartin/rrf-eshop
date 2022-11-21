import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://simple-e-comerce-default-rtdb.firebaseio.com/product.json";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(URL);
    let ourdata = [];
    for (let key in response.data) {
      ourdata.push({
        id: key,
        image: response.data[key].image,
        description: response.data[key].body,
        price: response.data[key].price,
        discountRate: response.data[key].discountRate,
        title: response.data[key].title,
      });
    }
    console.log(ourdata);
    return ourdata;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct) => {
    const response = await axios.post(URL, initialProduct);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    status: "idle",
    error: "",
  },
  reducers: {
    // addProductToCart: (state, { payload }) => {
    //   state.productList.push((item) => item.id === payload);
    // },
    // deleteProduct: (state, { payload }) => {
    //   state.productList = state.productList.filter(
    //     (item) => item.id !== payload
    //   );
    // },
    productAdded: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(title, description, image, discount, price) {
        return {
          payload: {
            title,
            description,
            image,
            discount,
            price,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.products = action.payload.message.error;
      });
  },
});

// export const { productList, addProductToCart, deleteProduct } =
//   productSlice.actions;

export const { fetchProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.productsList;
export const getProductsStatus = (state) => state.status;
export const getProductsError = (state) => state.error;
export default productSlice.reducer;
