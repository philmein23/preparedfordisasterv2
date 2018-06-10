import React, { Fragment } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const stepLabel = css({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px'
});

function EmergencyContact() {
  return (
    <Fragment>
      <div {...stepLabel}>
        <span>Step 2</span>
        <span> - </span>
        <span>Emergency Contact Information</span>
      </div>
      EmergencyContact
    </Fragment>
  );
}

export default EmergencyContact;
