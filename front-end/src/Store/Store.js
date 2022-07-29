import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./Slices/ReviewsSlice";
import businessSlice from "./Slices/businessSlice";
import productSlice from "./Slices/productSlice";
import categorySlice from "./Slices/categorySlice";


export default configureStore({
  reducer: {
    reviews: reviewsReducer,
    business:businessSlice,
    product:productSlice,
    category:categorySlice,
  },
});