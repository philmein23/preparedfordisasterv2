import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';

const NewPlanContext = React.createContext({
  personalInfo: {},
  emergencyContact: {},
  rallyInfo: {},
  userKits: []
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
      zipCode: ''
    };
  }

  render() {
    const { personalInfo } = this.state;
    console.log(this.state);
    return (
      <NewPlanContext.Provider value={this.state}>
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
      </NewPlanContext.Provider>
    );
  }
}

export default NewEmergencyPlan;
