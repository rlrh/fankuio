import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions"

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Fankuio"
        description="Add 5 survey credits for US$5"
        amount={500}
        token={this.props.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="black-text">Add Credits</a>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
