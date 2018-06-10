import React, { Fragment } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const stepLabel = css({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px'
});

function RallyInfo() {
  return (
    <Fragment>
      <div {...stepLabel}>
        <span>Step 3</span>
        <span> - </span>
        <span>Rally Location</span>
      </div>
      Rally Information
    </Fragment>
  );
}

export default RallyInfo;
