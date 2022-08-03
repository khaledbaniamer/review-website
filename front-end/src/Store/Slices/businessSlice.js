import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

export const getBusinesses = createAsyncThunk(
    'business/getBusinesses',
    async ()=>{
        const api = await fetch('http://127.0.0.1:8000/api/business');
        const response = await api.json();

        return response;
    }
);

export const getProductsForSingleBusiness = createAsyncThunk(
    'business/getProductsForSingleBusiness',
    async (id)=>{
        const api = await fetch(`http://127.0.0.1:8000/api/singlebusiness_products/${id}`);
        const response = await api.json();
        
        return response;
    }
);

export const getSingleBusiness = createAsyncThunk(
    'business/getSingleBusiness',
    async (id)=>{
        const api = await fetch(`http://127.0.0.1:8000/api/business/${id}`);
        const response = await api.json();

        return response;
    }
)

export const addBusiness = createAsyncThunk(
    'business/addBusiness',
    async (args ,thunkAPI)=>{
        const { rejectWithValue } = thunkAPI;

        try{

        const response = await axios.post('http://127.0.0.1:8000/api/addbusiness',args)
       console.log(response)
       
        if (response.data.status == 200) {

            const business = await response.data;
            return business;
        }else if(response.status ==200){
            console.log(response)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
            const business = await response.data;
            return business;
        }
        if(response.data.status == 400){
            // console.log(response.data.errors)
            const errors = JSON.stringify(response.data.errors);
            throw new Error (errors)
        }
        }catch (error){
        
          console.error(error);
          return rejectWithValue(error.message);
        }
    }
);

export const indexProducts = createAsyncThunk(
    'business/indexProducts',
    async ()=>{
        const api = await fetch(`http://127.0.0.1:8000/api/lastest_products`);
        const response = await api.json();

        return response;
    }
);

export const update_role = createAsyncThunk(
    'business/update_role',
    async(id)=>{
        const response = await axios.post(`http://127.0.0.1:8000/api/update_role/${id}`);
        localStorage.setItem('user-info',JSON.stringify(response.data))
        window.location.reload(false);
    }
)


const businessSlice = createSlice({
    name:'business',
    initialState:{businesses:[] , status:null , errors:null , products:[] , ava_rate:[]},
    extraReducers:{
        //get all bsuiness 
        [getBusinesses.fulfilled]:(state , action)=>{
            state.businesses = action.payload;
            state.status = true
        },
        [getBusinesses.pending]:(state , action)=>{
            state.status = false
        },
        [getBusinesses.rejected]:(state , action)=>{
            state.status = null
        },

        // get single bsuiness 
        [getSingleBusiness.fulfilled]:(state , action)=>{
            // console.log(action)
            state.businesses = action.payload;
            state.status = true
        },
        [getSingleBusiness.pending]:(state , action)=>{
            state.status = false
        },
        [getSingleBusiness.rejected]:(state , action)=>{
            state.status = null
        },
        [addBusiness.fulfilled]:(state , action)=>{
            // state.businesses = action.payload;
            state.status = true
            state.businesses.push(action.payload);
        },
        [addBusiness.pending]:(state , action)=>{
            state.status = false
        },
        [addBusiness.rejected]:(state , action)=>{
            state.status = null
            // console.log(action.payload)
            state.errors = JSON.parse(action.payload)
        },

        //get products for single business
        [getProductsForSingleBusiness.fulfilled]:(state , action)=>{
            console.log(action)
            state.products = action.payload[0];
            state.ava_rate = action.payload[1];
            state.status = true
        },
        [getProductsForSingleBusiness.pending]:(state , action)=>{
            state.status = false
        },
        [getProductsForSingleBusiness.rejected]:(state , action)=>{
            state.status = null
        },

        //get index products with rate
        [indexProducts.fulfilled]:(state , action)=>{
            // console.log(action)
            state.products = action.payload[0];
            state.ava_rate = action.payload[1];
            state.status = true
        },
        [indexProducts.pending]:(state , action)=>{
            state.status = false
        },
        [indexProducts.rejected]:(state , action)=>{
            state.status = null
        },

    }
})


export default businessSlice.reducer;