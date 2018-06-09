import React from 'react';
import NewEmergencyPlan from './NewEmergencyPlan';
import Address from './Address';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const formContainer = css({
  backgroundColor: '#FDFDFD',
  margin: '50px auto',
  width: '40vw',
  padding: '20px 10px',
  borderRadius: '10px'
});

const formGrid = css({
  display: 'grid',
  gridTemplateColumns: 'max-content',
  gridGap: '15px'
});

function PersonalInfo({
  onPersonFirstNameChange,
  onPersonLastNameChange,
  onPersonEmailAddressChange,
  onPersonPhoneNumberChange
}) {
  return (
    <NewEmergencyPlan.Consumer>
      {({ personalInfo, handleUpdateInformation }) => (
        <div {...formContainer}>
          <form {...formGrid}>
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={personalInfo.firstName}
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
                value={personalInfo.lastName}
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
                value={personalInfo.emailAddress}
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
                value={personalInfo.phoneNumber}
                onChange={onPersonPhoneNumberChange}
              />
            </div>
            <Address
              {...personalInfo}
              onAddressChange={handleUpdateInformation(
                'personalInfo',
                'address1'
              )}
            />
          </form>
        </div>
      )}
    </NewEmergencyPlan.Consumer>
  );
}

export default PersonalInfo;
