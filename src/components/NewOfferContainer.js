import React, { Component } from 'react';

import { connect } from 'react-redux';
import { postNewOffer } from '../actions/newOfferActions';
import NewOfferForm from './NewOfferForm';
import NewQuestion from "./NewQuestion";

class NewOfferContainer extends Component {

  submit = (values) => {
    this.props.postNewOffer(values);
  }

  render() {
    return (
      <div className="NewOfferContainer">
        <h2>Poster une offre</h2>
          <NewOfferForm onSubmit = {this.submit} />
          <NewQuestion />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
});

export default connect(mapStateToProps, { postNewOffer })(NewOfferContainer);

