// redux/reducer/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      // toggle between light and dark mode
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
