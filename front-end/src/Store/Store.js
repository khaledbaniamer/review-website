import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./Slices/ReviewsSlice";
import businessSlice from "./Slices/businessSlice";


export default configureStore({
  reducer: {
    reviews: reviewsReducer,
    business:businessSlice,
  },
});