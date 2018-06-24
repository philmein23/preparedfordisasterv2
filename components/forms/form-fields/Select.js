import React, { Fragment } from 'react';

function Select({ name, value, onChange, error, ...props }) {
  return (
    <Fragment>
      <label htmlFor={props.for}>{props.label}</label>
      <select id={props.id} name={name} value={value} onChange={onChange}>
        <option />
        <option />
      </select>
    </Fragment>
  );
}

export default Select;
