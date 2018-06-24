import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const NewPlanContext = React.createContext({
  personalInfo: {},
  emergencyContact: {},
  rallyInfo: {},
  userKits: []
});

const formContainer = css({
  backgroundColor: '#FDFDFD',
  margin: '50px auto',
  width: '40vw',
  padding: '20px 40px',
  borderRadius: '10px',
  boxSizing: 'border-box',
  boxShadow: '0 2px 6px hsla(0, 0%, 0%, 0.2)'
});

const buttonContainer = css({
  padding: '3px 10px',
  display: 'flex',
  justifyContent: 'flex-end'
});

const back = css({
  border: 'none',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '0 15px'
});

const submit = css({
  border: 'none',
  padding: '10px 15px',
  backgroundColor: '#060906',
  borderRadius: '5px',
  color: '#FDFDFD',
  textTransform: 'uppercase',
  letterSpacing: '1px'
});

class NewEmergencyPlan extends Component {
  render() {
    return <PersonalInfo />;
  }
}

export default NewEmergencyPlan;
