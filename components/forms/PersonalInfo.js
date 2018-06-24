import React, { Fragment } from 'react';
import Form from './form-fields/Form';
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

function PersonalInfo() {
  return (
    <Form
      render={({ state, onChange }) => {
        const {
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          ...address
        } = state.personalInfo;
        console.log('children render');
        const addressInfo = { ...address, onChange, category: 'personalInfo' };
        return (
          state.step === 1 && (
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
                      onChange={onChange('personalInfo', 'firstName')}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      for="last-name"
                      id="last-name"
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={onChange('personalInfo', 'lastName')}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      for="email-address"
                      id="email-address"
                      label="Email Address"
                      name="emailAddress"
                      value={emailAddress}
                      onChange={onChange('personalInfo', 'emailAddress')}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      for="phone-number"
                      id="phone-number"
                      label="Phone Number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onChange('personalInfo', 'phoneNumber')}
                    />
                  </div>
                </div>
              </div>

              <Address {...addressInfo} />
            </Fragment>
          )
        );
      }}
    />
  );
}

export default PersonalInfo;
