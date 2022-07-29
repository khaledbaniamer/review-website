import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import axios from 'axios';

//fetchReviews
export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
       const response = await axios('http://127.0.0.1:8000/api/comments');
    //    console.log(response)
    if (response.data.status === 400) {
        throw new Error(response.data.errors)
    }
    if (response.data.status === 200) {
        const reviews = await response.data.reviews;
        // console.log(response)
        return reviews;
    }
    }catch (error){
      console.error(error);
      return rejectWithValue(error.message);
    }
  });

//addReviews
export const addReviews = createAsyncThunk("reviews/addReviews", async (reviewData,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
       const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/comments',
        headers: { Accept: 'application/json' },
        data: reviewData
    });
    // console.log(response)
    if (response.data.status === 200) {
        const review = await response.data.review;
        console.log(review);
        return review;
    }else{
        // console.log(response.data.errors)
        const errors = JSON.stringify(response.data.errors);
        throw new Error (errors)
    }
    }catch (error){
      console.error(error);
      return rejectWithValue(error.message);
    }
  });

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        product:{},
        reviews: [],
        // review: {},
        isEdit : false,
        loading: false,
    errors: [],
    },
    reducers: {
        showEditForm: (state,action) => {
            state.isEdit = true;
        },
        cancelEditForm: (state,action) => {
            state.isEdit = false;
        },
    },
    extraReducers: {

         // Fetching the products
    [fetchReviews.pending]: (state, action) => {
        // console.log(action)
        state.loading = true;
        state.errors =null;
      },
      [fetchReviews.fulfilled]: (state, action) => {
        // console.log(action)
        state.loading = false;
        state.reviews = [...action.payload];
        // console.log(state.reviews)
        state.errors = null;
      },
      [fetchReviews.rejected]: (state, action) => {
        // console.log(action)
        state.loading = false;
        state.errors = action.payload;
        // console.log(state.errors);
      },
  
       // Adding a product
    [addReviews.pending]: (state, action) => {
        state.loading = true;
        state.errors = null;
      },
      [addReviews.fulfilled]: (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        state.reviews= [action.payload, ...state.reviews]; 
        state.errors = null;
      },
      [addReviews.rejected]: (state, action) => {
        state.loading = false;
        
        state.errors = JSON.parse(action.payload);
        
      },

    }
});

export const  reviewsActions = reviewsSlice.actions;
export default reviewsSlice.reducer;