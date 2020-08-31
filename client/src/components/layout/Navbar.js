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
                fontFamily: "monospace",
                fontSize:"10px",
                height: "100px"
              }}
              className="center brand-logo black-text nav-font"
            >
              <i className="material-icons">home</i>
              air bnb bargain
            </Link>
            <ul id="nav-mobile" class="left">
              {user.id && 
              <li>
              <Link
              to="/search"
              style={{
                fontFamily: "monospace",
                fontSize:"10px",
                height: "100px"
              }}
              className="black-text nav-font"
              >
                Search
              </Link>
              </li>
              }
              </ul>
              <ul id="nav-mobile" class="right">
              {user.id &&
              <li>
              <button
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
              style={{marginRight: 10}}
              >
              Logout
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