import {fetchResultsPending, fetchResultsSuccess, fetchResultsError} from './resultsActions';
import axios from "axios";
import { FETCH_RESULTS_ERROR, FETCH_RESULTS_SUCCESS } from './types';

const fetchResults = (searchData) => dispatch => {
    dispatch(fetchResultsPending());
      axios
      .get("/api/mashvisor/search")
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