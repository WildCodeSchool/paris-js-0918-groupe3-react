import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewOffer } from '../actions/newOfferActions';


 class NewQuestion extends Component {

  render() {
    return (
      <div className="NewQuestion">
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { postNewOffer })(NewQuestion);
