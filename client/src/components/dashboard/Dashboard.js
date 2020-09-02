import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Dashboard extends Component {
render() {
    const { user } = this.props.auth;
    
return (
      <div style={{ height: "75vh", fontFamily: "Balsamiq Sans, cursive" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1
            >
              <b>Welcome,</b> {user.name.split(" ")[0]}
            </h1>
            <h2>
              Go search for listings!
            </h2>
            </div>
        </div>
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
  mapStateToProps
)(Dashboard);