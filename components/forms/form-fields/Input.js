import React, { Fragment } from 'react';

function Input({ name, value, onChange, error, ...props }) {
  console.log(props, 'props');
  return (
    <Fragment>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </Fragment>
  );
}

export default Input;
