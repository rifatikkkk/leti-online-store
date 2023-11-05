import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice.js'

export const store = configureStore({
    reducer: {
        products: productSlice,
    },
})