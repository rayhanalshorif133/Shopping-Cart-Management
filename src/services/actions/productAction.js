import { GET_SUCCESS, GET_FAILURE } from '../constants/product';



const getSuccess = (data) => ({
    type: GET_SUCCESS,
    payload: data
});

const getFailure = (error) => ({
    type: GET_FAILURE,
    payload: error
});

export { getSuccess, getFailure };