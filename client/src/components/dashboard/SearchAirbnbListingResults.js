import React, {Component} from "react"
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import house from "../../images/house.jpg"
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
        return true;
    }

    
    render() {
        const {results, error, pending} = this.props;
        if(results === undefined || results.length === 0 || !this.shouldComponentRender()) {
            return <LoadingSpinner/>
        } else {
        return(
            <div className="row">
            <div class="col s12 m6">
                <h2 class="header">Search Results</h2>
                <div class="card horizontal">
                <div class="card-image">
                    <img src={this.props.results[0].image}/>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <h4><b>{results[0].name}</b></h4>
                    <h5>{results[0].address}</h5>
                    <ul class="collection">
                    <li class="collection-item">Price per night: {results[0].night_price}</li>
                    <li class="collection-item"># of Baths: {results[0].num_of_baths}</li>
                    <li class="collection-item"># of Beds: {results[0].num_of_rooms}</li>
                    <li class="collection-item"># of People: {results[0].capacity_of_people}</li>

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
    }
}
}

SearchAirbnbListingResults.propTypes = {

  };

const mapStateToProps = state => ({
    error: getResultsError(state),
    results: getResults(state),
    pending: getResultsPending(state)
  });

export default connect(
    mapStateToProps
)(SearchAirbnbListingResults);
