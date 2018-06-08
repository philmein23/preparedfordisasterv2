import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

function Login({ onSubmit }) {
  return (
    <div
      css={{
        width: '30vw',
        margin: '30px auto'
      }}
    >
      <form
        onSubmit={() => {}}
        css={{
          backgroundColor: '#FDFDFD',
          display: 'grid',
          gridTemplateColumns: 'max-content',
          gridRowGap: '15px',
          justifyContent: 'center',
          padding: '10px 15px',
          borderRadius: '5px'
        }}
        name="login-form"
      >
        <span
          css={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '600',
            letterSpacing: '1px',
            fontSize: '18px'
          }}
        >
          Login
        </span>
        <div>
          <label htmlFor="login">Username</label>
          <input
            id="login"
            name="username"
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
          />
        </div>
        <div
          css={{
            '> a': {
              color: '#060906'
            }
          }}
        >
          <Link to="/register">Click here to register</Link>
        </div>
        <button
          css={{
            border: 'none',
            backgroundColor: '#66ee78;',
            borderRadius: '5px',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '20px',
            color: '#060906'
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
