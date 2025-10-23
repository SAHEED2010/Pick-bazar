import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../redux/reducer/themeSlice";
 import cartSlice from "../redux/reducer/cartSlice";
 



const store = configureStore({
    reducer: {
        // add all reducer here
        theme: themeSlice,
        // cart: cartSlice,
        cart: cartSlice,

         
     }
 })













 export default store;