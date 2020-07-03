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
        case FETCH_RESULTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getResults = state => state.results;
export const getResultsPending = state => state.pending;
export const getResultsError = state => state.error;