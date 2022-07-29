import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./Slices/ReviewsSlice";


export default configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});