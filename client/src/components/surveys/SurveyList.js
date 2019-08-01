import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return this.props.surveys.reverse().map(survey => {
      const total = survey.yes + survey.no + survey.unresponded;
      const yesProportion = 100 * survey.yes / total;
      const noProportion = 100 * survey.no / total;
      const unrespondedProportion = 100 * survey.unresponded / total;

      return (
        <div key={survey.id} className="card">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <label className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </label>
          </div>
          <div className="card-action">
            <a className="green-text accent-4">Yes: {survey.yes} ({yesProportion}%)</a>
            <a className="red-text accent-4">No: {survey.no} ({noProportion}%)</a>
            <a className="blue-grey-text">Unresponded: {survey.unresponded} ({unrespondedProportion}%)</a>
            <label className="right">
              Last Response: {new Date(survey.lastResponded).toLocaleDateString()}
            </label>
          </div>
        </div>
      );
    })
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
