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
        // const reviews = await response.data.reviews;
        // console.log(response)
        return response.data;
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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        const review = await response.data;
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

//deleteReview
export const deleteReview = createAsyncThunk("reviews/deleteReview", async (reviewId,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
       const response = await axios({
        method: 'DELETE',
        url: `http://127.0.0.1:8000/api/comments/${reviewId}`,
        headers: { Accept: 'application/json' },
    });
    // console.log(response.data)
    if (response.data.status === 200) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        const review = await response.data;
        return review;
    }else{
        // console.log(response.data.errors)
        const errors = response.data.errors;
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
        overall: null,
        ratingCount: null,
    errors: null,
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
        state.reviews = [...action.payload.reviews];
        state.overall = action.payload.overall;
        state.ratingCount = action.payload.ratingCount;
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
        console.log(action.payload);
        // console.log(state.reviews);
        state.reviews.push(action.payload.review);
        state.overall = action.payload.overall;
        state.ratingCount = action.payload.ratingCount;
        state.errors = null;
      },
      [addReviews.rejected]: (state, action) => {
        state.loading = false;
        state.errors = JSON.parse(action.payload);
        
      },

        // Delete a product
    [deleteReview.pending]: (state, action) => {
        state.loading = true;
        state.errors = null;
      },
      [deleteReview.fulfilled]: (state, action) => {
        state.loading = false;
        // console.log(action.payload)
        state.overall = action.payload.overall;
        state.ratingCount = action.payload.ratingCount;
        state.reviews = state.reviews.filter((review)=> review.id !== action.payload.review.id);
        state.errors = null;
      },
      [deleteReview.rejected]: (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      }

    }
});

export const  reviewsActions = reviewsSlice.actions;
export default reviewsSlice.reducer;