import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    add(state, action) {
      const item = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        item.quantity = 1;
        state.push(item);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      const itemToIncrement = state.find((item) => item.id === itemId);

      if (itemToIncrement) {
        itemToIncrement.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const itemId = action.payload;
      const itemToDecrement = state.find((item) => item.id === itemId);

      if (itemToDecrement) {
        if (itemToDecrement.quantity > 1) {
          itemToDecrement.quantity--;
        } else {
          return state.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
