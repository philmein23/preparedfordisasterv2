import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Form from './form-fields/Form';
import EmergencyContact from './EmergencyContact';
import { createElement } from 'glamor/react';
import { css } from 'glamor';
import RallyInfo from './RallyInfo';
/* @jsx createElement */

class NewEmergencyPlan extends Component {
  renderForm = (state, onChange) => {
    const { step, personalInfo, emergencyContact, rallyInfo } = state;

    if (step === 1) {
      return (
        <PersonalInfo {...this.mergeData({ data: personalInfo, onChange })} />
      );
    }

    if (step === 2) {
      return (
        <EmergencyContact
          {...this.mergeData({ data: emergencyContact, onChange })}
        />
      );
    }

    if (step === 3) {
      return <RallyInfo {...this.mergeData({ data: rallyInfo, onChange })} />;
    }
  };

  mergeData = ({ data, onChange }) => {
    return {
      ...data,
      onChange
    };
  };

  render() {
    return (
      <Form
        render={({ state, onChange }) => {
          return this.renderForm(state, onChange);
        }}
      />
    );
  }
}

export default NewEmergencyPlan;
