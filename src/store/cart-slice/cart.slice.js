import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addProductToCart: (state, action) => { state.cartItems.push(action.payload) }
    }
})

export const { addProductToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
