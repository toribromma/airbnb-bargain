import {fetchResultsPending, fetchResultsSuccess, fetchResultsError} from './resultsActions';
import axios from "axios";
import { FETCH_RESULTS_ERROR, FETCH_RESULTS_SUCCESS } from './types';

const fetchResults = (searchData) => dispatch => {
    dispatch(fetchResultsPending());
    axios({
        "method":"GET",
        "url":"https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"mashvisor-api.p.rapidapi.com",
        "x-rapidapi-key": "",
        "useQueryString":true
        },"params":{
        "zip_code":"90210",
        "page":"1",
        "city":"Los Angeles",
        "items":"10",
        "state":"CA"
        }
        })
        .then((response)=>{
          console.log(response)
          dispatch({
              type: FETCH_RESULTS_SUCCESS,
              payload: response.data.content.properties
          })
        })
        .catch((error)=>{
          console.log(error)
          dispatch({
              type: FETCH_RESULTS_ERROR,
              payload: error
          })
        })
}

export default fetchResults;