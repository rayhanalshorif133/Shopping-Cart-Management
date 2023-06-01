import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productsSlice'
import bucketReducer from '../features/bucket/bucketSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        bucket: bucketReducer
    }
});

export default store;