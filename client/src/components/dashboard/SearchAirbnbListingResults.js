import React, {Component} from "react"
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import house from "../../images/house.jpg"
class SearchAirbnbListingResults extends Component {
    constructor() {
        super();
        this.state = {
            results: ""
        }
    }
    
    render() {
        return(
            <div className="row">
            <div class="col s12 m6">
                <h2 class="header">Search Results</h2>
                <div class="card horizontal">
                <div class="card-image">
                    <img src={house}/>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <h4><b>The Mansion House</b></h4>
                    <h5>4556 Beverly Hills Lane, Los Angeles California</h5>
                    <ul class="collection">
                    <li class="collection-item">Price per night: $120</li>
                    <li class="collection-item"># of Baths: 2</li>
                    <li class="collection-item"># of Beds: 2</li>
                    <li class="collection-item"># of People: 4</li>

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

SearchAirbnbListingResults.propTypes = {

  };

const mapStateToProps = state => ({

  });

export default connect(
    mapStateToProps
)(SearchAirbnbListingResults);
