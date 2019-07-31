import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeWrapper from "./StripeWrapper";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <StripeWrapper />
            </li>
            <li style={{ margin: "0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <div class="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo darken-1">
            <div className="container">
              <Link
                to={this.props.auth ? "/surveys" : "/"}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
