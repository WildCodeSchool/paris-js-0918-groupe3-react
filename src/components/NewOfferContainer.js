import React, { Component } from 'react';
// import NewOfferForm from './NewOfferForm';
// import NewOfferQuestions from './NewOfferQuestions';
// import NewQuestion from './NewQuestion';
// import OrangeButton from './OrangeButton';
import { connect } from 'react-redux';
import { getOriginalQuestions } from '../actions/newOfferActions';


 class NewOfferContainer extends Component {
  render() {
    return (
      <div className="NewOfferContainer">
        <h2>Poster une offre</h2>
          {/* <NewOfferForm/> */}
          {/* <NewOfferQuestions/> */}
          {/* <NewQuestion/> */}
          {/* <OrangeButton/> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { getOriginalQuestions })(NewOfferContainer);
