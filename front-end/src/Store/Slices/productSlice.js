import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProducts = createAsyncThunk(
  "product/addProducts", 
  async (args) => {
  console.log(args.get('product_name'))
  console.log(args.get('product_image'))
  console.log(args.get('product_image1'))
  console.log(args.get('product_image2'))
  console.log(args.get('product_description'))
  console.log(args.get('catrgory_id'))
  console.log(args.get('business_id'))
  const api = await axios.post("http://127.0.0.1:8000/api/add_product", args);
    
});

const productSlice = createSlice({
  name:"product",
  initialState: {products:[], status: null },
  extraReducers: {


    //add products to api

    [addProducts.fulfilled]: (state, action) => {
      state.status = "success send data";
      state.products.push(action.payload);
    },
    [addProducts.pending]: (state) => {
      state.status = "pending send data";
    },
    [addProducts.rejected]: (state) => {
      state.status = "rejected send data";
    },
  },
});

export default productSlice.reducer;
