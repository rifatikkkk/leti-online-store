import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js'

const initialState = {
    products: [],
    loading: false,
}

export const getProducts = createAsyncThunk('produc/getProduct', async () => {
    try {
        const { data } = await axios.get('/product');
        return data;
    } catch (error) {
        console.log(error)
    }
})

export default initialState.reducer;