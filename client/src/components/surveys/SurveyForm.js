import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm Component!
      </div>
    );
  }
}

export default reduxForm({
  from: 'surveyForm'
}) (SurveyForm);