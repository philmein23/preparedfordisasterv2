import React, { Fragment } from 'react';
import NewEmergencyPlan from './NewEmergencyPlan';
import Address from './Address';

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
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={onPersonFirstNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="last-name">last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={onPersonLastNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-address">Email Address</label>
                  <input
                    id="email-address"
                    type="text"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={onPersonEmailAddressChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone-number">Phone Number</label>
                  <input
                    id="phone-number"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={onPersonPhoneNumberChange}
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
