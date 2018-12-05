import React, { Component } from 'react';

import './AccountCompany.css';

 class AccountCompany extends Component {
  render() {
    return (
     <div className='AccountCompany'>
        <p>compte compagnie {this.props.match.params.id}</p>
     </div>
    );
  };
};

export default AccountCompany;