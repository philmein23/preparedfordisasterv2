import React, { Fragment } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const formGrid = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridGap: '15px'
});

function Address({
  address1,
  address2,
  city,
  state,
  zipCode,
  country,
  ...handlers
}) {
  const {
    onAddressChange,
    onCityChange,
    onCountryChange,
    onStateChange,
    onZipCodeChange
  } = handlers;
  return (
    <Fragment>
      <div {...formGrid}>
        <div css={{ alignSelf: 'center' }}>
          <span>Personal Address</span>
        </div>
        <div className="form-field-container">
          <div>
            <label htmlFor="address-line-1">Address Line 1</label>
            <input
              id="address-line-1"
              value={address1}
              onChange={onAddressChange}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" value={city} onChange={onCityChange} />
          </div>
          <div>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" value={zipCode} onChange={onZipCodeChange} />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select id="state" value={state} onChange={onStateChange}>
              <option>Select State</option>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select id="country" value={country} onChange={onCountryChange}>
              <option>Select Country</option>
              <option />
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
