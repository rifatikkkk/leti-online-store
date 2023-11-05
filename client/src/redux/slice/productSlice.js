import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

const initialState = {
    products: [],
    loading: false,
}

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    try {
        const { data } = await axios.get('/product')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.loading = true
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload.products
        },
        [getProduct.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default productSlice.reducer