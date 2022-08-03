import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addProducts = createAsyncThunk(
  "product/addProducts", 
  async (args) => {

  const api = await axios.post("http://127.0.0.1:8000/api/add_product", args);
  console.log(api);

  if(api.status ==200 ||api.status ==201){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: api.data.message,
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload(false);
}
    
});
export const business_products = createAsyncThunk(
  'product/business_products',
  async (id)=>{
     const api =await fetch(`http://127.0.0.1:8000/api/business_products/${id}`);
     const response = await api.json();

     return response;
    }
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async(id) =>{
    const api = await fetch(`http://127.0.0.1:8000/api/deleteproductt/${id}`);
    const response =await api.json();
    console.log(response)
    console.log(api)
    if(api.ok){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
  }
  return response;
})

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

    [business_products.fulfilled]: (state, action) => {
      state.status = "success send data";
      state.products = action.payload;
    },
    [business_products.pending]: (state) => {
      state.status = "pending send data";
    },
    [business_products.rejected]: (state) => {
      state.status = "rejected send data";
    },

    //delete products 
    [deleteProduct.fulfilled]: (state, action) => {
      state.status = "success send data";
      const {id} = action.payload;
      state.products = state.products.filter((item)=>item.id != id);
    },
    [deleteProduct.pending]: (state) => {
      state.status = "pending send data";
    },
    [deleteProduct.rejected]: (state) => {
      state.status = "rejected send data";
    },
  },
});

export default productSlice.reducer;
