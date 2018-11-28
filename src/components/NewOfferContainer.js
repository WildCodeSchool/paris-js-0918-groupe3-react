import React, { Component } from 'react';
import NewOfferForm from './NewOfferForm';
import NewOfferQuestions from './NewOfferQuestions';
// import NewQuestion from './NewQuestion';
import OrangeButton from './OrangeButton';
import { connect } from 'react-redux';
import { postNewOffer } from '../actions/newOfferActions';


 class NewOfferContainer extends Component {

  handleSubmit = (e) => {
    console.log('handlsubmit')
    e.preventDefault();
    this.props.postNewOffer(e);
  }

  render() {
    return (
      <div className="NewOfferContainer">
        <h2>Poster une offre</h2>
          <form id='postNewOfferForm' method='post' onSubmit = {this.handleSubmit}>
            <NewOfferForm/>
            <NewOfferQuestions />
            {/* <NewQuestion/> */}
            <input type ='checkbox' name = 'is_published' value = '1' />
            <span>Mise en ligne immédiate</span>
            <OrangeButton text='Valider'/>
          </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { postNewOffer })(NewOfferContainer);
