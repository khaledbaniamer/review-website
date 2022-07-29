import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";





const productSlice = createSlice({
    name:'product',
    initialState:{products:[] , status:null},
    extraReducers:{
       

        //add products to api

        [addProduct.fulfilled]:(state , action)=>{
            state.status = 'success send data';
            state.items.push(action.payload);
            

        },
        [addProduct.pending]:(state  )=>{
            state.status = 'pending send data';
            
        },
        [addProduct.rejected]:(state )=>{
            state.status = 'rejected send data';
        },


        
        
}
})

export default productSlice.reducer;
