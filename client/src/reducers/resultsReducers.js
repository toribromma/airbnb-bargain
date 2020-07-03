import {FETCH_RESULTS_PENDING, FETCH_RESULTS_SUCCESS, FETCH_RESULTS_ERROR} from '../actions/types'

const initialState = {
    pending: false,
    results: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_RESULTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_RESULTS_SUCCESS:
            return {
                ...state,
                pending: false,
                results: action.payload
            }
        case FETCH_RESUULTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.results;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;