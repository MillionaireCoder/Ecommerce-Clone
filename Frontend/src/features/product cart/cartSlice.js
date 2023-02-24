import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import cartService from "./cartService";

export const getcart = createAsyncThunk(
  "user/cart",
  async (thunkAPI) => {
    try {
      return await cartService.getcart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createcart = createAsyncThunk(
  "user/cart",
  async (cart, thunkAPI) => {
    try {
      return await cartService.createcart(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const updateAProduct = createAsyncThunk(
//   "product/update-product",
//   async (product, thunkAPI) => {
//     try {
//       return await productService.updateBrand(product);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const deleteAProduct = createAsyncThunk(
//   "brand/delete-brand",
//   async (id, thunkAPI) => {
//     try {
//       return await productService.deleteProduct(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const resetState = createAction("Reset_all");

const initialState = {
  cart: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getcart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createcart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createcart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createcart = action.payload;
      })
      .addCase(createcart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default cartSlice.reducer;
