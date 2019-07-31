import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends Component {

  renderHeroButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="btn-large waves-effect waves-light indigo">Get Started</a>
        );
      default:
        return (
          <Link to="/surveys" className="btn-large waves-effect waves-light indigo" >
            Go to Your Dashboard
          </Link>
        );
    }
  }

  render() {
    return (
      <Fragment>
        <Parallax
          bgImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          strength={500}
        >
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <h1 className="header center indigo-text">Fankuio</h1>
              <div className="row center">
                <h5 className="header col s12 light indigo-text">
                  Quick and Easy Email Surveys
                </h5>
              </div>
              <div className="row center">
                {this.renderHeroButton()}
              </div>
            </div>
          </div>
        </Parallax>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="large material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Speeds up development</h5>
                  <p className="light">
                    We did most of the heavy lifting for you to provide a default
                    stylings that incorporate our custom components. Additionally,
                    we refined animations and transitions to provide a smoother
                    experience for developers.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="large material-icons">group</i>
                  </h2>
                  <h5 className="center">User Experience Focused</h5>
                  <p className="light">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that incorporates components
                    and animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across all
                    platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="large material-icons">settings</i>
                  </h2>
                  <h5 className="center">Easy to work with</h5>
                  <p className="light">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started. We are also
                    always open to feedback and can answer any questions a user
                    may have about Materialize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
