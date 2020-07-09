import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoadingSpinner from "../layout/Spinner.js";
import {getResultsError, getResults, getResultsPending} from '../../reducers/resultsReducers';


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
        const {results, error, pending} = this.props;
        if(results === undefined || results.length === 0 || !this.shouldComponentRender()) {
            return <LoadingSpinner/>
        } else {
            
        return(
            results.map(result => {
                return (
                <div className="row">
                <div class="col s12 m6">
                    {/* <h2 class="header">Search Results</h2> */}
                    <div class="card">
                    <div class="card-image">
                        <img width="200" src={result.image}/>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4><b>{result.name}</b></h4>
                        <h5>{result.address}</h5>
                        <ul class="collection">
                        <li class="collection-item">Price per night: $ {result.night_price}</li>
                        <li class="collection-item"># of Baths: {result.num_of_baths}</li>
                        <li class="collection-item"># of Beds: {result.num_of_rooms}</li>
                        <li class="collection-item"># of People: {result.capacity_of_people}</li>
    
                        </ul>
                        </div>
                        <div class="card-action">
                        <a href="#">More Info</a>
                        </div>
                    </div>
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
    pending: getResultsPending(state.search)
  });



export default connect(
    mapStateToProps
)(SearchAirbnbListingResults);
