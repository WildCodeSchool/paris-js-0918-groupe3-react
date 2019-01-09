import React, { Component } from "react";
import { connect } from "react-redux";

import Offer from "./Offer";

class Offers extends Component {
  render() {
    const { offersList, origin } = this.props;
    return (
      <div className="Offers">
        {offersList.map(offer => (
          <Offer origin={origin} key={offer.id} data={offer} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
 // offersList: state.offers.offersList,
  offersList: state.searchOffers.offersList
});

export default connect(mapStateToProps)(Offers);
