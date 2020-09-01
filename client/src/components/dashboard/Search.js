import React, {Component} from "react";
import { connect } from "react-redux";
import SearchAirbnbListing from "./SearchAirbnbListing"
import SearchAirbnbListingResults from "./SearchAirbnbListingResults";
import GetMap from "./getMap"

class Search extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <SearchAirbnbListing/>
                    <GetMap/>
                    <div style={{overflow:"auto", height: 350, marginTop: 20}} class="col s12 m3">
                        <SearchAirbnbListingResults/>
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(Search);