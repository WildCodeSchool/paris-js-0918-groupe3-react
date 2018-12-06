import React, { Component } from "react";

import { connect } from "react-redux";
import { postNewOffer } from "../actions/newOfferActions";
import NewOfferForm from "./NewOfferForm";

class NewOfferContainer extends Component {
  submit = values => {
    this.props.postNewOffer(values);
  };

  render() {
    return (
      <div className="container NewOfferContainer">
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col col-lg-8">
            <h2>Poster une offre</h2>
            <NewOfferForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionsList: state.newOffer.questionsList
});

export default connect(
  mapStateToProps,
  { postNewOffer }
)(NewOfferContainer);
