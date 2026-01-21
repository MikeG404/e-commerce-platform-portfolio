import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        isCartOpen: false
    },
    reducers: {
        addProductToCart: (state, action) => { state.cartItems.push(action.payload) },
        toggleOpenCart: (state) => { state.isCartOpen = !state.isCartOpen }
    }
})

export const { addProductToCart, toggleOpenCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
