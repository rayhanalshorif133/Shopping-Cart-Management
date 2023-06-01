import { createSlice } from "@reduxjs/toolkit";
import { BUCKET } from "../../constants/sessionStorageConstant";

const sessionStorage = window.sessionStorage;
const keyName = BUCKET;
/* 
 const data = {
            id: product.id,
            title: product.title,
            price: product.price,
            totalPrice: product.price,
            img: product.image,
            quantity: product.quantity
    }
*/

// session storage
const defaultValue = [];
var storedValue = sessionStorage.getItem(keyName);
if (!storedValue) {
    sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
    location.reload();
} else {
    storedValue = JSON.parse(storedValue);
}


const initialState = {
    data: storedValue,
    isLoading: false,
    error: null,
    status: "idle",
    totalQuantity: 0,
    totalPrice: 0,
    msg: "Message Not Found"
};





const bucketSlice = createSlice({
    name: "bucket",
    initialState,
    reducers: {
        addBucket: (state, action) => {
            var isExist = state.data.some((item) => item.id === action.payload.id);
            state.msg = "Item Added to Bucket";
            if (isExist) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        const newItem = {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.price * (item.quantity + 1),
                        }
                        return newItem;
                    }
                    return item;
                });
            } else {
                state.data.push(action.payload);
            }
            sessionStorage.setItem(keyName, JSON.stringify(state.data));
        },
        removeBucket: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
            sessionStorage.setItem(keyName, JSON.stringify(state.data));
        },
        removeItemBucket: (state, action) => {
            var isExist = state.data.find((item) => item.id === action.payload);
            if (isExist) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload) {
                        if (item.quantity - 1 < 1) {
                            state.isLoading = false;
                            state.status = "idle";
                            state.msg = "Please Item delete from bucket";
                        } else {
                            state.msg = "Item remove to Bucket";
                            const newItem = {
                                ...item,
                                quantity: item.quantity - 1,
                                totalPrice: item.price * (item.quantity - 1),
                            }
                            return newItem;
                        }
                    }
                    return item;
                });
            } else {
                state.isLoading = false;
                state.status = "idle";
            }
            sessionStorage.setItem(keyName, JSON.stringify(state.data));
        },
        bucketTotalPrice: (state) => {
            const items = {
                ...state,
                totalPrice: state.data.reduce((total, item) => total + item.totalPrice, 0),
            }
            sessionStorage.setItem(keyName, JSON.stringify(state.data));
            return items;
        }
    }
});

const { reducer, actions } = bucketSlice;
export const { addBucket, removeBucket, updateBucket, removeItemBucket, bucketTotalPrice } = actions;
export default reducer;