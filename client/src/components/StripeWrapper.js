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
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
