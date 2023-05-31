import { createStore, combineReducers } from "redux";

import productReducer from "./services/reducers/productReducer";


const store = createStore(productReducer);




export default store;
