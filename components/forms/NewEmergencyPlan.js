import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Form from './form-fields/Form';
import EmergencyContact from './EmergencyContact';
import { createElement } from 'glamor/react';
import { css } from 'glamor';
import RallyInfo from './RallyInfo';
/* @jsx createElement */

class NewEmergencyPlan extends Component {
  render() {
    return (
      <Form
        render={({ state, onChange }) => {
          const { step, personalInfo, emergencyContact, rallyInfo } = state;

          if (step === 1) {
            const info = { ...personalInfo, onChange };
            return <PersonalInfo {...info} />;
          }

          if (step === 2) {
            const info = { ...emergencyContact, onChange };
            return <EmergencyContact {...info} />;
          }

          if (step === 3) {
            const info = { ...rallyInfo, onChange };
            return <RallyInfo {...info} />;
          }
        }}
      />
    );
  }
}

export default NewEmergencyPlan;
