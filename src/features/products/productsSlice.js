import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    isLoading: true,
    error: null,
    status: 'idle'
}

export const fetchProducts = createAsyncThunk('posts/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.data = state.data.filter(product => product.id !== action.payload);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true,
                    state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.data = state.data.concat(action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed',
                    state.error = action.error.message
            })
    },

});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;