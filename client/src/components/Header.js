import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeWrapper from "./StripeWrapper";
import M from "materialize-css";

class Header extends Component {

  componentDidUpdate() {
    let dropdowns = document.querySelectorAll('.dropdown-trigger');
    
    let options = {
        inDuration: 300,
        outDuration: 300,
        hover: true, // Activate on hover
        coverTrigger: false, // Displays dropdown below the button
    };
    
    M.Dropdown.init(dropdowns, options);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign In With Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Link
                to="/surveys"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <a className="dropdown-trigger valign-wrapper" data-target="creditsDropdown">
                <i className="material-icons left">attach_money</i>
                {this.props.auth.credits} credits
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="dropdown-trigger valign-wrapper" data-target="authDropdown">
                <img src={this.props.auth.photoUrl} alt="" style={{ marginRight: "12px" }} className="circle nav-img" />
                {this.props.auth.displayName}
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo darken-1">
            <div className="container">
              <Link
                to="/"
                className="left brand-logo"
              >
                <i className="large material-icons">mms</i>
                Fankuio
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </div>
        </nav>
        <ul id="authDropdown" className="dropdown-content">
          <a href="/api/logout" className="black-text">Sign Out</a>
        </ul>
        <ul id="creditsDropdown" className="dropdown-content">
          <StripeWrapper />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
