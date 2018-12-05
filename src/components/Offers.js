import React, { Component } from 'react';
import { connect } from 'react-redux';

import Offer from 'Offer';

class Offers extends Component {
  render() {
    return (
      <div className='Offers'>
        {offersList.map(offer => {
          <Offer key={offer.id} data={offer} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  offersList: state.offers.offersList,
});

export default connect (mapStateToProps)(Offers);
