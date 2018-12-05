import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchOffers } from '../actions/searchOffersActions';
import Offers from './Offers'

 class SearchOffers extends Component {

    state = {
        title: '',
        place: '',
        contract_type: 'CDI',
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        }, () => console.log(this.state))
      }
    
   
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchOffers(this.state);
      }
  render() {
    return (
      <div>
        <form className='SearchOffer' onSubmit = {this.handleSubmit}>
          <fieldset>
            <label htmlFor='title'>Recherchez une offre</label>
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
            <button>rechercher</button>
          </fieldset>
          
         
        </form>
       <Offers />
        
      </div>
    )
  }
}


const mapStateToProps = state => ({
   offersList: state.offers.offersList
  });
  
  export default connect(mapStateToProps, { searchOffers })(SearchOffers);