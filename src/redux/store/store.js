import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishSlice from "./wishSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        wishlist: wishSlice
    }
})

export default store