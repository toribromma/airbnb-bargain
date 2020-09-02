import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoadingSpinner from "../layout/Spinner.js";
import {getResultsError, getResults, getResultsPending} from '../../reducers/resultsReducers';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class SearchAirbnbListingResults extends Component {

    constructor() {
        super();
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true
    }


    render() {
        const notify = () => toast('Saved ♡', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        const {results, error, pending} = this.props;
        if(results === undefined || results.length === 0 || !this.shouldComponentRender()) {
            return <div></div>
        } 
        if(pending === true) {
            return <LoadingSpinner className="col s12 m3"/>
        }
        else {
        return(
            results.map(result => {
                return (
                    <div class="card center-align">
                    <div class="card-image">
                        <img height={100} width={350} src={result.image}/>
                    </div>
                    <div class="card-stacked">
                    <a onClick={notify} class="btn-floating halfway-fab waves-effect waves-light red"><i style={{width: 25, height: 25}} class="material-icons">star</i></a>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                        <div class="card-content">
                        <p style={{fontSize:10}}><b>{result.name}</b></p>
                        <p style={{fontSize:9}}>{result.address}</p>
                        <ul style={{fontSize:8}}>
                        <li>$ {result.night_price}</li>
                        <li>{result.num_of_baths} baths</li>
                        <li>{result.num_of_rooms} rooms</li>
                        <li>Capacity {result.capacity_of_people}</li>
                        </ul>
                        </div>
                        <div class="card-action">
                        <Link style={{fontSize:8}} to={"/search/" + result.property_id}>More Info</Link>
                        </div>
                    </div>
                    </div>

                )
            })
           
        )
    }
}
}

SearchAirbnbListingResults.propTypes = {

  };

const mapStateToProps = state => ({
    error: getResultsError(state.search),
    results: state.search.results,
    pending: state.search.pending
  });



export default connect(
    mapStateToProps
)(SearchAirbnbListingResults);
