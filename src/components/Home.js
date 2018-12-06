import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import OrangeButton from './OrangeButton';
import SearchOffers from './SearchOffers';
import { connect } from 'react-redux';
import { getIdCompany } from "../actions/connexionUsersActions";
import './css/OrangeButton.css';



class Home extends Component {
  state = {
    inputEmail: '',
    redirection: false,
    id: 2
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventdefault()
    this.props.getIdCompany(this.state.inputEmail)
    // this.setState({
    //   redirection : true
    // })

  }
  render() {
    // if (this.state.redirection === true) return <Redirect to={`/company${this.props.idCompany}`}/>
    console.log(this.props.idCompany)
    return (
      
      <div className='Home'>
        <NavLink to='/newOffer'>Poster une offre</NavLink>

        <button type="button" className='OrangeButton' data-toggle="modal" data-target="#connexion">
          Connexion
        </button>
        <SearchOffers />

        <div className="modal fade" id="connexion" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className='SearchOffer' onSubmit={this.handleSubmit}>
                  <input type='text' name='inputEmail' placeholder='entrée email compagnie' onChange={this.handleChange} />
                  <OrangeButton text='acceder à mon espace' />

                </form>
              </div>

            </div>
          </div>
        </div>



      </div>
    )
  }
}

const mapStateToProps = state => ({
  idCompany: state.idCompany.idCompany
});

export default connect(mapStateToProps, { getIdCompany })(Home);
