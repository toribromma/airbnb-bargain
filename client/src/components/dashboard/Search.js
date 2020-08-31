import React, {Component} from "react";
import { connect } from "react-redux";
import SearchAirbnbListing from "./SearchAirbnbListing"
import SearchAirbnbListingResults from "./SearchAirbnbListingResults";

class Search extends Component {
    render() {
        return (
            <div>
            <SearchAirbnbListing/>
            <SearchAirbnbListingResults/>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(Search);