import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <NavLink to='/newOffer'>Poster une offre</NavLink>
      </div>
    )
  }
}

export default (Home);
