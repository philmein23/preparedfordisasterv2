import React, { Component, Fragment } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const formContainer = css({
  backgroundColor: '#FDFDFD',
  margin: '50px auto',
  width: '40vw',
  padding: '20px 40px',
  borderRadius: '10px',
  boxSizing: 'border-box',
  boxShadow: '0 2px 6px hsla(0, 0%, 0%, 0.2)'
});

const buttonContainer = css({
  padding: '3px 10px',
  display: 'flex',
  justifyContent: 'flex-end'
});

const back = css({
  border: 'none',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '0 15px'
});

const submit = css({
  border: 'none',
  padding: '10px 15px',
  backgroundColor: '#060906',
  borderRadius: '5px',
  color: '#FDFDFD',
  textTransform: 'uppercase',
  letterSpacing: '1px'
});

class Form extends Component {
  handleUpdateInformation = (category, fieldName) => e => {
    const { value } = e.target;

    this.setState(state => {
      return {
        [category]: {
          ...state[category],
          [fieldName]: value
        }
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { step } = this.state;

    if (step <= 4) {
      this.setState(() => ({
        step: step + 1
      }));
    } else {
      console.log('form submitted');
    }
  };

  returnPreviousStep = e => {
    e.preventDefault();

    const { step } = this.state;

    this.setState(() => ({
      step: step <= 4 && step > 0 ? step - 1 : 1
    }));
  };

  state = {
    step: 1,
    personalInfo: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      ...Form.getAddressTemplate()
    },
    emergencyContact: {
      firstName: '',
      lastName: '',
      ...Form.getAddressTemplate()
    },
    rallyInfo: {
      ...Form.getAddressTemplate()
    },
    userKits: []
  };

  static getAddressTemplate() {
    return {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    };
  }

  render() {
    const { step } = this.state;
    console.log('render');
    return (
      <div {...formContainer}>
        <form
          onSubmit={this.handleSubmit}
          css={{ display: 'grid', gridRowGap: '40px' }}
        >
          {this.props.render({
            state: this.state,
            onChange: this.handleUpdateInformation
          })}
          <div {...buttonContainer}>
            {!(step === 1) && (
              <button {...back} onClick={this.returnPreviousStep}>
                Back
              </button>
            )}
            <button {...submit} type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
