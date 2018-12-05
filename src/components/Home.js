import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchOffer from './SearchOffer';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <NavLink to='/newOffer'>Poster une offre</NavLink>
        <SearchOffer/>
      </div>
    )
  }
}

export default (Home);
