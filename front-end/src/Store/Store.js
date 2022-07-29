import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "";


export default configureStore({
  reducer: {
    reviews: reviewsReducer,
    
  },
});