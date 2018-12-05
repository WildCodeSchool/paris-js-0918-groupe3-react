import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OrangeButton from './OrangeButton';
import SearchOffers from './SearchOffers';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <NavLink to='/newOffer'>Poster une offre</NavLink>
        <OrangeButton text='compte entreprise'/>
        <SearchOffers/>
      </div>
    )
  }
}

export default (Home);
