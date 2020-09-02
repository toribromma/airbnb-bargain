import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"20px",
                height: "100px"
              }}
              className="center brand-logo black-text nav-font"
            >
              <i className="material-icons">home</i>
              <span className="hide-on-med-and-down">airbnb bargain</span>
            </Link>
            <ul id="nav-mobile" class="left">
              {user.id && 
              <li>
              <Link
              to="/search"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"12px",
                height: "100px",
                fontWeight: 700,
                marginLeft: 30
              }}
              className="black-text nav-font"
              >
                Search
              </Link>
              </li>
              }
              {user.id && 
              <li>
              <Link
              to="/Dashboard"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"12px",
                height: "100px",
                fontWeight: 700
              }}
              className="black-text nav-font"
              >
                Dashboard
              </Link>
              </li>
              }
              </ul>
              <ul id="nav-mobile" class="right">
              {user.id &&
              <li>
              <button
              style={{marginRight: 30}}
              className="btn waves-effect waves-light"
              onClick={this.onLogoutClick}
              >
              Sign Out
              </button>
              </li>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);