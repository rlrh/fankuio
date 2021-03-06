import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onSurveyFormReviewBack, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h3>Confirm survey details</h3>
      {formFields.map(({ label, name }) =>
        <div key={name}>
          <label>{label}</label>
          <p>{ formValues[name] }</p>
        </div>
      )}
      <button className="indigo btn-flat white-text" onClick={onSurveyFormReviewBack}>
        Previous
        <i className="right material-icons">navigate_before</i>
      </button>
      <button onClick={() => submitSurvey(formValues, () => history.push("/surveys"))} className="teal btn-flat right white-text">
        Send Survey
        <i className="right material-icons">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
