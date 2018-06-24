import React, { Fragment } from 'react';
import NewEmergencyPlan from './NewEmergencyPlan';
import Address from './Address';
import Input from './form-fields/Input';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const formGrid = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridGap: '15px'
});

const stepLabel = css({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px'
});

function PersonalInfo({
  onPersonFirstNameChange,
  onPersonLastNameChange,
  onPersonEmailAddressChange,
  onPersonPhoneNumberChange
}) {
  return (
    <NewEmergencyPlan.Consumer>
      {({ personalInfo, handleUpdateInformation }) => {
        const {
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          ...address
        } = personalInfo;

        return (
          <Fragment>
            <div {...stepLabel}>
              <span>Step 1</span>
              <span> - </span>
              <span>Personal Information</span>
            </div>
            <div {...formGrid}>
              <div css={{ alignSelf: 'center' }}>
                <span>General Information</span>
              </div>
              <div className="form-field-container">
                <div>
                  <Input
                    type="text"
                    for="first-name"
                    id="first-name"
                    label="First Name"
                    name="firstName"
                    placeholder="First Name..."
                    value={firstName}
                    onChange={onPersonFirstNameChange}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    for="last-name"
                    id="last-name"
                    name="lastName"
                    value={lastName}
                    onChange={onPersonLastNameChange}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    for="email-address"
                    id="email-address"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={onPersonEmailAddressChange}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    for="phone-number"
                    id="phone-number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onPersonEmailAddressChange}
                  />
                </div>
              </div>
            </div>

            <Address
              {...address}
              onAddressChange={handleUpdateInformation(
                'personalInfo',
                'address1'
              )}
              onCityChange={handleUpdateInformation('personalInfo', 'city')}
              onZipCodeChange={handleUpdateInformation(
                'personalInfo',
                'zipCode'
              )}
              onStateChange={handleUpdateInformation('personalInfo', 'state')}
              onCountryChange={handleUpdateInformation(
                'personalInfo',
                'country'
              )}
            />
          </Fragment>
        );
      }}
    </NewEmergencyPlan.Consumer>
  );
}

export default PersonalInfo;
