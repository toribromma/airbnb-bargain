import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import SearchAirbnbListing from "./SearchAirbnbListing"
import SearchAirbnbListingResults from "./SearchAirbnbListingResults";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h5
            style={{fontSize: "14px"}}
            >
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h5>
            </div>
        </div>
            <SearchAirbnbListing/>
            <SearchAirbnbListingResults/>
            <button
              // style={{
              //   width: "100px",
              //   borderRadius: "1px",
              //   letterSpacing: "1.5px",
              //   marginTop: "1rem"
              // }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);