import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/products/productsSlice'
import bucketReducer from '../features/bucket/bucketSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        bucket: bucketReducer
    }
});

export default store;