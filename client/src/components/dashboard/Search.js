import React, {Component} from "react";
import { connect } from "react-redux";
import SearchAirbnbListing from "./SearchAirbnbListing"
import SearchAirbnbListingResults from "./SearchAirbnbListingResults";
import GetMap from "./getMap"

class Search extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container">
                <div className="row">
                    <SearchAirbnbListing/>
                </div>
                <div className="row">
                    <div style={{overflow:"auto", height: 350, marginTop: 20}} className="col s12 m4">
                        <SearchAirbnbListingResults/>
                    </div>
                    <GetMap/>
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