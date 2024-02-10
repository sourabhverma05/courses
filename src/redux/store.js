import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "@/redux/courseSlice"

export const store = configureStore({
    reducer: cartSliceReducer,
})

