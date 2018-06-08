import React from 'react';
import { Link } from 'react-router-dom';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const navGrid = css({
  fontFamily: 'gnuolane, sans-serif',
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '20px',
  alignItems: 'center'
});

const navTextStyle = css({
  '> a': {
    textDecoration: 'none',
    color: '#060906',
    fontSize: '20px',
    letterSpacing: '1px'
  }
});

export default function Navbar() {
  return (
    <div
      css={{
        backgroundColor: '#FDFDFD',
        fontFamily: 'proxima-nova, sans-serif',
        display: 'grid',
        gridTemplateColumns: '2fr max-content',
        padding: '5px 10px'
      }}
    >
      <h1
        css={{
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        Prepared for Disaster
      </h1>
      <nav {...navGrid} {...navTextStyle}>
        <Link to="/">Home</Link>
        <Link to="/create">New Plan</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </div>
  );
}
