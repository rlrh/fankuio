import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showReview: false };

  render() {
    return (
      <div className="container">
        {this.state.showReview ? (
          <SurveyFormReview
            onSurveyFormReviewBack={() => this.setState({ showReview: false })}
          />
        ) : (
          <SurveyForm
            onSurveyFormNext={() => this.setState({ showReview: true })}
          />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
