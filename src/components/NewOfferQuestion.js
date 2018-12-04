import React, { Component } from 'react';

 class NewOfferQUestion extends Component {
  render() {
    const { id, text, handleBoxChange } = this.props;
    return (
      <div className="NewOfferQuestion">
        <input type='checkbox' name={`question${id}`} value={id} onChange={handleBoxChange} />
        <span>{text}</span>
      </div>
    )
  };
};

export default NewOfferQUestion;
