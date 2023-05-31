import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
    status: "idle",
};


const bucketSlice = createSlice({
    name: "bucket",
    initialState,
    reducers: {
        addBucket: (state, action) => {
            var isExist = state.data.some((item) => item.id === action.payload.id);
            if (isExist) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.price * (item.quantity + 1)
                        }
                    }
                    return item;
                });
            } else {
                state.data.push(action.payload);
            }
        },
        removeBucket: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
        updateBucket: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        },
        getBucket: (state) => {
            state.isLoading = true;
            state.status = "collecting";
        }
    }
});

const { reducer, actions } = bucketSlice;
export const { addBucket, removeBucket, updateBucket, getBucket } = actions;
export default reducer;