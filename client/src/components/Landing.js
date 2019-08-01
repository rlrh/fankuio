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
                  Quick, Easy, Simple Email Surveys
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
                  <h2 className="center indigo-text">
                    <i className="large material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Lightning-fast Surveys</h5>
                  <p className="light">
                    Quickly get feedback on anything, with an easy-to-use
                    interface that makes creating surveys a breeze and
                    shows all the results at a glance.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center indigo-text">
                    <i className="large material-icons">group</i>
                  </h2>
                  <h5 className="center">Hassle-free for Surveyees</h5>
                  <p className="light">
                    Improve your survey click-through rate by keeping the survey 
                    question and answer links right in the email, 
                    making it quick, easy and simple for your surveyees.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center indigo-text">
                    <i className="large material-icons">settings</i>
                  </h2>
                  <h5 className="center">Pay-as-you-go</h5>
                  <p className="light">
                    With a stored credit system where one credit lets you send out one survey,
                    say goodbye to monthly subscriptions.
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
