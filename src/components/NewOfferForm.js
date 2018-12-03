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
        <div className="container">
          <form className="postNewOfferForm" onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="col-xs-12 col-md-6">
                <label htmlFor="title">Titre de votre offre</label>
              </div>
              <div className="col-xs-12 col-md-6">
                <Field
                  component="input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Ex: Développeur Web"
                />
              </div>
              <div className="col-xs-12 col-md-2">
                <label htmlFor="place">Lieu</label>
              </div>
              <div className="col-xs-12 col-md-4">
                <Field
                  component="input"
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Ex: Paris"
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <label htmlFor="contract_type">Type de contrat</label>
              </div>
              <div className="col-xs-12 col-md-2">
                <Field
                  component="select"
                  name="contract_type"
                  id="contract_type"
                >
                  <option>CDI</option>
                  <option>CDD</option>
                  <option>Stage</option>
                </Field>
              </div>
              <div className="col-12">
                <label htmlFor="description">Description</label>
              </div>
              <div className="col-12">
                <Field
                  component="textarea"
                  name="description"
                  id="description"
                />
              </div>
            </div>
            <NewOfferQuestions />
            <NewQuestion />
            <div className="row justify-content-end m-2">
              <div className="col-auto offset-4">
                <Field
                  component="input"
                  type="checkbox"
                  name="is_published"
                  value="1"
                />
                &nbsp;
                <span>Mise en ligne immédiate</span>
              </div>
              <div className="col-auto offset-4">
                <OrangeButton text="Valider mon offre" />
              </div>
            </div>
          </form>
        </div>
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
