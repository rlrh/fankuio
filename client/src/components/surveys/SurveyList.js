import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return this.props.surveys.reverse().map(survey => (
      <div key={survey.id} className="card">
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <label className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </label>
        </div>
        <div className="card-action">
          <a className="green-text accent-4">Yes: {survey.yes}</a>
          <a className="red-text accent-4">No: {survey.no}</a>
          <label className="right">
            Last Response: {new Date(survey.lastResponded).toLocaleDateString()}
          </label>
        </div>
      </div>
    ));
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
