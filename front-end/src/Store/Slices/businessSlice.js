import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getBusinesses = createAsyncThunk(
    'business/getBusinesses',
    async ()=>{
        const api = await fetch('http://127.0.0.1:8000/api/business');
        const response = await api.json();

        return response;
    }
);

// export const getSingleBusiness = createAsyncThunk(
//     'business/getSingleBusiness',
//     async (id)=>{
//         const api = await fetch(`http://127.0.0.1:8000/api/business/${id}`);
//         const response = await api.json();

//         return response;
//     }
// )


const businessSlice = createSlice({
    name:'business',
    initialState:{businesses:[] , status:null},
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

        //get single bsuiness 
        // [getSingleBusiness.fulfilled]:(state , action)=>{
        //     console.log(action)
        //     state.businesses = action.payload;
        //     state.status = true
        // },
        // [getSingleBusiness.pending]:(state , action)=>{
        //     state.status = false
        // },
        // [getSingleBusiness.rejected]:(state , action)=>{
        //     state.status = null
        // }
    }
})


export default businessSlice.reducer;