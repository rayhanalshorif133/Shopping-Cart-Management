import { GET_SUCCESS, GET_FAILURE } from '../constants/product';
const initialState = {
    data: [],
    loading: true,
    status: false,
};


const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                status: true,
            }
        case GET_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                status: false,
            }
    }
};

export default productReducer;