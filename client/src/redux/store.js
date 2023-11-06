import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice.js'
import userSlice from './slice/userSlice.js'
import cartItemsSlice from './slice/cartSlice.js'

export const store = configureStore({
    reducer: {
        products: productSlice,
        user: userSlice,
        cartItems: cartItemsSlice
    },
})