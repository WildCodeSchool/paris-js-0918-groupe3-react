import React, { Component } from 'react';

import NewOfferQuestions from './NewOfferQuestions';
import NewQuestion from './NewQuestion';
import OrangeButton from './OrangeButton';
import { connect } from 'react-redux';
import { postNewOffer } from '../actions/newOfferActions';

import './NewOfferForm.css';

class NewOfferForm extends Component {

  state = {
    title: '',
    place: '',
    contract_type: 'CDI',
    description: '',
    is_published: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => console.log(this.state))
  }

  handleBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postNewOffer(this.state);
  }

  render() {
    return (
      <div className="NewOfferForm">
        <form className='postNewOfferForm' onSubmit = {this.handleSubmit}>
          <fieldset>
            <label htmlFor='title'>Titre de votre offre</label>
            <input type='text' name='title' id='title' placeholder='Ex: Développeur Web' onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <label htmlFor='place'>Lieu</label>
            <input type='text' name='place' id='place' placeholder='Ex: Paris' onChange={this.handleChange} />
            <label htmlFor='contract_type'>Type de contrat</label>
            <select name='contract_type' id='contract_type' onChange={this.handleChange} >
              <option>CDI</option>
              <option>CDD</option>
              <option>Stage</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor='description'>Description</label>
            <textarea name='description' id='description' onChange={this.handleChange} ></textarea>
          </fieldset>
          <NewOfferQuestions handleBoxChange={this.handleBoxChange} />
          <NewQuestion />
          <input type ='checkbox' name = 'is_published' onChange={this.handleBoxChange} />
          <span>Mise en ligne immédiate</span>
          <OrangeButton text='Valider mon offre'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  // values : state.form.newOffer.values,
});

export default connect(mapStateToProps, { postNewOffer })(NewOfferForm);
