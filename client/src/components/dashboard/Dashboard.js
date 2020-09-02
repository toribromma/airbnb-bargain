import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Dashboard extends Component {
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