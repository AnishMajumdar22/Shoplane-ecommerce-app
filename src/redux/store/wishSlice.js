import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const wishSlice = createSlice({
  name: "WISHLIST",
  initialState,
  reducers: {
    addWish(state, action) {
      state.push(action.payload);
    },
    removeWish(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
})


export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;