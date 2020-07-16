import {fetchResultsPending, fetchResultsSuccess, fetchResultsError} from './resultsActions';
import axios from "axios";
import { FETCH_RESULTS_ERROR, FETCH_RESULTS_SUCCESS } from './types';


const fetchResults = (searchData) => dispatch => {
    dispatch(fetchResultsPending());
    console.log("hi")
    console.log(searchData)
    const url = "/api/mashvisor/search"
    // setTimeout(() => {
 axios.get(url, {params: {
   state: searchData.state,
   zip: searchData.zip,
   city: searchData.city
  }})
      .then(response => {
        console.log(response.data.content.properties)
        dispatch(fetchResultsSuccess(response.data.content.properties))
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