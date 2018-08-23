import React, { Fragment } from 'react';
import Input from './form-fields/Input';

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
  city,
  zipCode,
  state,
  country,
  onChange,
  category
}) {
  return (
    <Fragment>
      <div {...formGrid}>
        <div css={{ alignSelf: 'center' }}>
          <span>Personal Address</span>
        </div>
        <div className="form-field-container">
          <div>
            <Input
              type="text"
              label="Address"
              for="address-line-1"
              id="address-line-1"
              name="address1"
              value={address1}
              onChange={onChange(category, 'address1')}
            />
          </div>
          <div>
            <Input
              type="text"
              for="city"
              label="city"
              id="id"
              value={city}
              name="city"
              onChange={onChange(category, 'city')}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Zip Code"
              for="zip-code"
              id="zip-code"
              name="zipCode"
              value={zipCode}
              onChange={onChange(category, 'zipCode')}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select
              id="state"
              value={state}
              onChange={onChange(category, 'state')}
            >
              <option>Select State</option>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={onChange(category, 'country')}
            >
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
