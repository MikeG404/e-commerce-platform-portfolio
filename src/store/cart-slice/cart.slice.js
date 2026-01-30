import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        isCartOpen: false
    },
    reducers: {
        addProductToCart: (state, action) => {
            const existingProduct = state.cartItems.find(product => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        removeProductFromCart: (state, action) => { state.cartItems = state.cartItems.filter(item => item.id !== action.payload)},
        toggleOpenCart: (state) => { state.isCartOpen = !state.isCartOpen }
    }
})

export const { addProductToCart, removeProductFromCart, toggleOpenCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
