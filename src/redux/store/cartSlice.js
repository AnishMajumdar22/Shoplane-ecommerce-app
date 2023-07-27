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
        // If the item already exists in the cart, increment the quantity
        existingItem.quantity++;
      } else {
        // If the item doesn't exist, add it with quantity 1
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
          // If the quantity is already 1, remove the item from the cart
          return state.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
