import {
    FETCH_RESULTS_PENDING,
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_ERROR
  } from "./types";

export const fetchResultsPending = () => {
    return {
        type: FETCH_RESULTS_PENDING
    };
};

export const fetchResultsSuccess = results => {
    return {
        type: FETCH_RESULTS_SUCCESS,
        payload: results
    };
};

export const fetchResultsError = error => {
    return {
        type: FETCH_RESULTS_ERROR,
        payload: error
    }
}
