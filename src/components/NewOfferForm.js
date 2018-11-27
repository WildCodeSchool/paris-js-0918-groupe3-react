import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOriginalQuestions } from '../actions/newOfferActions';


 class NewOfferForm extends Component {
  render() {
    return (
      <div className="NewOfferForm">
          <label htmlFor='title'>Titre de votre offre</label>
          <input type='text' name='title' id='title' placeholder='Ex: Développeur Web' />
          <label htmlFor='place'>Lieu</label>
          <input type='text' name='place' id='place' placeholder='Ex: Paris' />
          <label htmlFor='contract_type'>Type de contrat</label>
          <select name='contract_type' id='contract_type'>
            <option>CDI</option>
            <option>CDD</option>
            <option>Stage</option>
          </select>
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' defaultValue='Description du poste'></textarea>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { getOriginalQuestions })(NewOfferForm);
