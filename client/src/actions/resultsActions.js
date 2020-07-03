import {
    FETCH_RESULTS_PENDING,
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_ERROR
  } from "./types";

  export const fetchProducts = data => {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch("https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings?zip_code=91342&page=1&city=San%20Francisco&items=10&state=CA", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_MV_KEY}`
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products);
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

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
