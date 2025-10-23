import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0
    
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeCart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload.id);
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.item = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeCart, clearCart  } = cartSlice.actions;
export default cartSlice.reducer
   