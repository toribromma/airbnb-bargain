import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                fontSize:"10px"
              }}
              className="col s12 brand-logo center black-text nav-font"
            >
              <i className="material-icons">home</i>
              air bnb bargain
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;