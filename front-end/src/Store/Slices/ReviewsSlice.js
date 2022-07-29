import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import axios from 'axios';

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        isEdit : false,
        loading: false,
    error: null,
    },
    reducers: {
        showEditForm: (state,action) => {
            state.isEdit = true;
        },
    },
    extraReducers: {

    }
});

export const  reviewsActions = reviewsSlice.actions;
export default reviewsSlice.reducer;