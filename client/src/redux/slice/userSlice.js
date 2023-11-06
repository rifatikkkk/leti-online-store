import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios.js'

const initialState = {
    user: JSON.parse(window.localStorage.getItem('user')) || {},
    loading: false,
    token: window.localStorage.getItem('token') || null,
    isAuthenticated: window.localStorage.getItem('token') ? true : false,
}

//  Login User
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ name, password }) => {
        try {
            const { data } = await axios.post('/user/login', {
                name,
                password,
            })
            // console.log(data)
            if (data.token && data.user) {
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('user', JSON.stringify(data.user))
                // console.log(data.user)
                // window.localStorage.setItem('isAuthenticated', data.isAuthenticated)
                console.log(data)
                return data
            }
            else {
                return
            }

        } catch (error) {
            // return error?.response?.data?.message;
            console.log(error?.response?.data?.message)
        }
    },
)

//  Register User
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ name, password }) => {
        try {
            const { data } = await axios.post('/user/register', {
                name,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('user', JSON.stringify(data.user))
            }
            return data
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    },
)

// Logout User
export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => {
        try {
            await axios.get('/user/logout');
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
        } catch (error) {
            console.log(error?.response?.data)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false
            state.isAuthenticated = action?.payload?.user ? true : false
            state.user = action?.payload?.user
            state.token = action?.payload?.token
        },
        [loginUser.rejected]: (state) => {
            state.loading = false
            state.isAuthenticated = false
            state.user = null
        },

        [registerUser.pending]: (state) => {
            state.loading = true
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false
            state.isAuthenticated = action?.payload?.user ? true : false
            state.user = action?.payload?.user
            state.token = action?.payload?.token
        },
        [registerUser.rejected]: (state) => {
            state.loading = false
            state.isAuthenticated = false
            state.user = null
        },

        [logoutUser.pending]: (state) => {
            state.loading = true
        },
        [logoutUser.fulfilled]: (state) => {
            state.loading = false
            state.isAuthenticated = false
            state.user = {}
            state.token = null
        },
        [logoutUser.rejected]: (state) => {
            state.loading = false
        }


    }
})

export default userSlice.reducer;