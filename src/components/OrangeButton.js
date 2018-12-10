import React, { Component } from 'react';

import './css/OrangeButton.scss';

 class OrangeButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <button className="OrangeButton">{text}</button>
    );
  };
};

export default OrangeButton;
