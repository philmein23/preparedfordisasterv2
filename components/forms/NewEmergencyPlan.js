import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import EmergencyContact from './EmergencyContact';
import RallyInfo from './RallyInfo';

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
  boxSizing: 'border-box'
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
  static Consumer = NewPlanContext.Consumer;

  handleUpdateInformation = (category, fieldName) => e => {
    const { value } = e.target;

    this.setState(state => {
      return {
        [category]: {
          ...state[category],
          [fieldName]: value
        }
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { step } = this.state;

    if (step <= 4) {
      this.setState(() => ({
        step: step + 1
      }));
    } else {
      console.log('form submitted');
    }
  };

  returnPreviousStep = e => {
    e.preventDefault();

    const { step } = this.state;

    this.setState(() => ({
      step: step <= 4 ? step - 1 : 1
    }));
  };

  state = {
    step: 1,
    personalInfo: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      ...NewEmergencyPlan.getAddressTemplate()
    },
    emergencyContact: {
      firstName: '',
      lastName: '',
      ...NewEmergencyPlan.getAddressTemplate()
    },
    rallyInfo: {
      ...NewEmergencyPlan.getAddressTemplate()
    },
    userKits: [],
    handleUpdateInformation: this.handleUpdateInformation
  };

  static getAddressTemplate() {
    return {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    };
  }

  render() {
    const { personalInfo, step } = this.state;
    console.log(this.state);
    return (
      <NewPlanContext.Provider value={this.state}>
        <div {...formContainer}>
          <form
            onSubmit={this.handleSubmit}
            css={{ display: 'grid', gridRowGap: '40px' }}
          >
            {step === 1 && (
              <PersonalInfo
                firstName={personalInfo.firstName}
                lastName={personalInfo.lastName}
                emailAddress={personalInfo.emailAddress}
                phoneNumber={personalInfo.phoneNumber}
                onPersonFirstNameChange={this.handleUpdateInformation(
                  'personalInfo',
                  'firstName'
                )}
                onPersonLastNameChange={this.handleUpdateInformation(
                  'personalInfo',
                  'lastName'
                )}
                onPersonEmailAddressChange={this.handleUpdateInformation(
                  'personalInfo',
                  'emailAddress'
                )}
                onPersonPhoneNumberChange={this.handleUpdateInformation(
                  'personalInfo',
                  'phoneNumber'
                )}
              />
            )}

            {step === 2 && <EmergencyContact />}

            {step === 3 && <RallyInfo />}

            <div {...buttonContainer}>
              {!(step === 1) && (
                <button {...back} onClick={this.returnPreviousStep}>
                  Back
                </button>
              )}
              <button {...submit} type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
      </NewPlanContext.Provider>
    );
  }
}

export default NewEmergencyPlan;
