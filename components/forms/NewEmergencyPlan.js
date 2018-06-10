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
  boxSizing: 'border-box'
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

  state = {
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
    const { personalInfo } = this.state;
    console.log(this.state);
    return (
      <NewPlanContext.Provider value={this.state}>
        <div {...formContainer}>
          <form css={{ display: 'grid', gridRowGap: '40px' }}>
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
          </form>
        </div>
      </NewPlanContext.Provider>
    );
  }
}

export default NewEmergencyPlan;
