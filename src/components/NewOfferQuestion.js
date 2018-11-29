import React, { Component } from 'react';
import { Field } from 'redux-form';

 class NewOfferQUestion extends Component {
  render() {
    const { id, text } = this.props;
    return (
      <div className="NewOfferQuestion">
        <Field component="input" type='checkbox' name={`question${id}`} value={id} />
        <span>{text}</span>
      </div>
    )
  };
};

export default NewOfferQUestion;
