import React, { Component } from 'react';
import { connect } from 'react-redux';

 class SearchOffer extends Component {

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
        this.props.searchOffer(this.state);
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
          </fieldset>
          
         
        </form>
        
      </div>
    )
  }
}


const mapStateToProps = state => ({
   
  });
  
  export default connect(mapStateToProps, { searchOffer })(SearchOffer);