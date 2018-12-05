import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OrangeButton from './OrangeButton';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <NavLink to='/newOffer'>Poster une offre</NavLink>
        <OrangeButton text='compte entreprise'/>
      </div>
    )
  }
}

export default (Home);
