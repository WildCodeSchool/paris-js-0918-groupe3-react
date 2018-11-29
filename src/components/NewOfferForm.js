import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'

import NewOfferQuestions from './NewOfferQuestions';
import NewQuestion from './NewQuestion';
import OrangeButton from './OrangeButton';
import { connect } from 'react-redux';
import { postNewOffer } from '../actions/newOfferActions';

import './NewOfferForm.css';

const initialData = {
  contract_type: 'CDI',
  is_published: true
}

class NewOfferForm extends Component {

  render() {

  const {handleSubmit} = this.props;

    return (
      <div className="NewOfferForm">
        <form className='postNewOfferForm' onSubmit = {handleSubmit}>
          <fieldset>
            <label htmlFor='title'>Titre de votre offre</label>
            <Field component="input" type='text' name='title' id='title' placeholder='Ex: Développeur Web' />
          </fieldset>
          <fieldset>
            <label htmlFor='place'>Lieu</label>
            <Field component="input" type='text' name='place' id='place' placeholder='Ex: Paris' />
            <label htmlFor='contract_type'>Type de contrat</label>
            <Field component="select" name='contract_type' id='contract_type'>
              <option>CDI</option>
              <option>CDD</option>
              <option>Stage</option>
            </Field>
          </fieldset>
          <fieldset>
            <label htmlFor='description'>Description</label>
            <Field component="textarea" name='description' id='description'></Field>
          </fieldset>
          <NewOfferQuestions />
          <NewQuestion />
          <Field component="input" type ='checkbox' name = 'is_published' value = '1' />
          <span>Mise en ligne immédiate</span>
          <OrangeButton text='Valider mon offre'/>
        </form>
      </div>
    )
  }
}

NewOfferForm = reduxForm({
  form: 'offer'
})(NewOfferForm)

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  // values : state.form.newOffer.values,
});

export default connect(mapStateToProps, { postNewOffer })(NewOfferForm);
