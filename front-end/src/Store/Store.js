import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./Slices/ReviewsSlice";
import businessSlice from "./Slices/businessSlice";
import productSlice from "./Slices/productSlice";


export default configureStore({
  reducer: {
    reviews: reviewsReducer,
    business:businessSlice,
    product:productSlice,
  },
});