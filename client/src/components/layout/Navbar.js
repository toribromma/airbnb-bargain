import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import "./style.css"

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div class="topnav" id="myTopnav">
        <Link
              to="/"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"20px",
                // height: "100px"
              }}
              className="active"
            >
              <i className="material-icons">home</i>
              <span className="">airbnb bargain</span>
          </Link>
{user.id && 
              <Link
              to="/search"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"20px",
                // height: "100px",
                fontWeight: 700,

              }}
              className="right"
              >
                Search
              </Link>
              }
              {user.id && 
              <Link
              to="/Dashboard"
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"20px",
                // height: "100px",
                fontWeight: 700
              }}
              className="right"
              >
                Dashboard
              </Link>
              }
              {user.id && 
              <a
              style={{
                fontFamily: "Balsamiq sans, cursive",
                fontSize:"20px",
                fontWeight: 700,
                cursor: "pointer"
              }}
              className="blue right"
              onClick={this.onLogoutClick}
              >
              Sign Out
              </a>
  }
<a href="javascript:void(0);" className="icon" onClick={this.myFunction} >
  <i class="fa fa-bars"></i>
</a>
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