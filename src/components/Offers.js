import React, { Component } from "react";
import { connect } from "react-redux";

import Offer from "./Offer";

class Offers extends Component {
  render() {
    const { offersList, origin } = this.props;
    return (
      <div className="Offers container-fluid mb-5">
        <div className="row">
          <div className="col">
            {offersList
              .sort((b, a) => Date.parse(a.updated_at) - Date.parse(b.updated_at))
              .map(offer => (
                <Offer origin={origin} key={offer.id} data={offer} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offersList: state.searchOffers.offersList
});

export default connect(mapStateToProps)(Offers);
