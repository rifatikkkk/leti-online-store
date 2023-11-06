import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios.js'

const initialState = {
    cartItems: JSON.parse(window.localStorage.getItem('cartItems')) || [],
    shippingInfo: {},
    loading: false,
}

// export const getItemsCart = createAsyncThunk(
//     'cart/getItem',
//     async () => {
//         try {
//             const data  = window.localStorage.getItem('cartItems');
//             console.log(data)
//             return data

//         } catch (error) {
//             console.log(error)
//         }
//     }
// )

// Add items to Cart

export const addItemsToCart = createAsyncThunk(
    'cart/addItem',
    async (id) => {
        try {
            // console.log('id - ' + id)

            const { data } = await axios.get(`/product/${id}`);

            // console.log(data)

            const getData = JSON.parse(window.localStorage.getItem('cartItems'));

            // console.log(getData)

            if (!getData) {
                window.localStorage.setItem('cartItems', JSON.stringify([{
                    name: data.product.name,
                    image: data.product.images[0].url,
                    price: data.product.price,
                    product: data.product._id,
                    quantity: 1,
                }]))
                return ([{
                    name: data.product.name,
                    image: data.product.images[0].url,
                    price: data.product.price,
                    product: data.product._id,
                    quantity: 1
                }])
            }
            else {
                let available = false

                getData.forEach(element => {
                    if (element.product === data.product._id) {
                        available = true
                    }
                });

                if (available) {
                    console.log('товар имеется в корзине уже')
                }
                else {
                    getData.push({
                        name: data.product.name,
                        image: data.product.images[0].url,
                        price: data.product.price,
                        product: data.product._id,
                        quantity: 1
                    })
                    console.log(getData)
                    window.localStorage.setItem('cartItems', JSON.stringify(getData))
                    return getData
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
)

export const clearItemsCart = createAsyncThunk('cart/clearItems', async () => {
    try {
        return []
    } catch (error) {
        console.log(error)
    }
})

export const editItemsCart = createAsyncThunk('cart/editItem', async (itemsCart) => {
    try {
        window.localStorage.setItem('cartItems', JSON.stringify(itemsCart))
        return itemsCart
    } catch (error) {
        console.log(error)
    }
})



export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {},
    extraReducers: {
        // [getItemsCart.pending]: (state) => {
        //     state.loading = true
        // },
        // [getItemsCart.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.cartItems = action?.payload
        // },
        // [getItemsCart.rejected]: (state) => {
        //     state.loading = false
        // },

        [addItemsToCart.pending]: (state) => {
            state.loading = true
        },
        [addItemsToCart.fulfilled]: (state, action) => {
            state.loading = false
            state.cartItems = action?.payload
        },
        [addItemsToCart.rejected]: (state) => {
            state.loading = false
        },

        [clearItemsCart.pending]: (state) => {
            state.loading = true
        },
        [clearItemsCart.fulfilled]: (state, action) => {
            state.loading = false
            state.cartItems = action?.payload
        },
        [clearItemsCart.rejected]: (state) => {
            state.loading = false
        },

        [editItemsCart.pending]: (state) => {
            state.loading = true
        },
        [editItemsCart.fulfilled]: (state, action) => {
            state.loading = false
            state.cartItems = action?.payload
        },
        [editItemsCart.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default cartItemsSlice.reducer