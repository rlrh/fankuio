import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h3>Create a new survey</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveyFormNext)}>
          {formFields.map(({ label, name }) =>
            <Field
              key={name}
              label={label}
              name={name}
              type="text"
              component={SurveyField}
            />
          )}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
            <i className="right material-icons">cancel</i>
          </Link>
          <button type="submit" className="indigo btn-flat right white-text">
            Next
            <i className="right material-icons">navigate_next</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value."
    }
  });

  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate: validate,
  destroyOnUnmount: false
})(SurveyForm);
