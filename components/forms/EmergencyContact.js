import React, { Fragment } from 'react';

import Address from './Address';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
import NewEmergencyPlan from './NewEmergencyPlan';
/* @jsx createElement */

const stepLabel = css({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px',
  lineHeight: '1.2'
});

function EmergencyContact() {
  return (
    <NewEmergencyPlan.Consumer>
      {({ emergencyContact, handleUpdateInformation }) => {
        const { firstName, lastName, ...address } = emergencyContact;
        return (
          <Fragment>
            <div {...stepLabel}>
              <span>Step 2</span>
              <span> - </span>
              <span>Emergency Contact Information</span>
              <p
                css={{
                  fontWeight: 'lighter',
                  fontSize: '9px',
                  letterSpacing: '1px'
                }}
              >
                Please enter your emergency contact's information
              </p>
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
                  onChange={handleUpdateInformation(
                    'emergencyContact',
                    'firstName'
                  )}
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleUpdateInformation(
                    'emergencyContact',
                    'lastName'
                  )}
                />
              </div>
            </div>
            <div>
              <Address {...address} />
            </div>
          </Fragment>
        );
      }}
    </NewEmergencyPlan.Consumer>
  );
}

export default EmergencyContact;
