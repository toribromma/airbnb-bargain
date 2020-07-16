import {fetchResultsPending, fetchResultsSuccess, fetchResultsError} from './resultsActions';
import axios from "axios";
import { FETCH_RESULTS_ERROR, FETCH_RESULTS_SUCCESS } from './types';


const fetchResults = searchData => async dispatch => {
    dispatch(fetchResultsPending());
    console.log("hi")
    console.log(searchData)
    // setTimeout(() => {
     await axios.get("/api/mashvisor/search", searchData)
      .then(response => {
        console.log(response.data)
        dispatch(fetchResultsSuccess(response.data))
      })
      .catch((error)=>{
        console.log(error)
        dispatch({
            type: FETCH_RESULTS_ERROR,
            payload: error
        })
      })
    // }, 1000)
    

}

export default fetchResults;