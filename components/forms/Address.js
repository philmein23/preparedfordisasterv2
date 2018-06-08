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
  zipcode,
  onAddressChange,
  onCityChange,
  onZipCodeChange,
  onStateChange,
  onCountryChange
}) {
  return (
    <Fragment>
      <form>
        <div {...formGrid}>
          <div>
            <span>Personal Address</span>
          </div>
          <div>
            <div>
              <label htmlFor="address-line-1">Address Line 1</label>
              <input
                id="address-line-1"
                value={address1}
                onChange={onAddressChange}
              />
            </div>
            <div>
              <label htmlFor="address-line-2">Address Line 2</label>
              <input
                id="address-line-2"
                value={address2}
                onChange={onAddressChange}
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default Address;
