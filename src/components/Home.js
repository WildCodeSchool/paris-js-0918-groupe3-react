import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import SearchOffers from './SearchOffers';
import OrangeButton from './OrangeButton';
import Header from "./Header";
import { connect } from 'react-redux';
import { getIdCompany } from "../actions/connexionUsersActions";
import './css/OrangeButton.css';
import './css/Home.css';


class Home extends Component {
  state = {
    inputEmail: '',
    redirection: false,
    showModal: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.props.getIdCompany(this.state.inputEmail)
    this.setState({
      redirection: true,
      showModal: false
    })
  }

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const { redirection, showModal } = this.state
    const modalDisplay = showModal ? 'modal-actived' : 'modal-desactived'
    if (redirection === true)
      return (
        <Redirect to={`/company${this.props.idCompany}`} />
      )

    return (

      <div className='Home'>
        <Header />

        <div className={modalDisplay}>
          <div className='backgroundModal' >
            <div className='modalDIY animated fadeInDownBig faster'>
              <button className="close" onClick={this.openModal}>
                <span>&times;</span>
              </button>
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='inputEmail' placeholder='entrer email entreprise' onChange={this.handleChange} />
                <OrangeButton text='Connection' />
              </form>
              <NavLink to='/newAccountCompagny'>Inscription</NavLink>
            </div>
          </div>
        </div>

        <NavLink to='/newOffer'>Poster une offre</NavLink>

        <button
          type="button"
          className='OrangeButton'
          onClick={this.openModal}
        >
          Entreprise
        </button>

        <SearchOffers />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idCompany: state.usersInfo.idCompany
});

export default connect(mapStateToProps, { getIdCompany })(Home);

