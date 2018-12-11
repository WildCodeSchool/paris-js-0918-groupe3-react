import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import SearchOffers from "./SearchOffers";
import Offers from "./Offers";
import OrangeButton from "./OrangeButton";

import { getIdCompany } from "../actions/connexionUsersActions";

import "./css/Home.scss";
import "./css/OrangeButton.scss";

import icone_CV from "../images/Icone_CV.png";
import icone_LM from "../images/Icone_LM.png";
import icone_ALGO from "../images/Icone_ALGO.png";

class Home extends Component {
  state = {
    inputEmail: "",
    inputPassword: "",
    redirection: false,
    showModal: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { inputEmail, inputPassword } = this.state
    await this.props.getIdCompany(inputEmail, inputPassword);
    this.setState({
      redirection: true,
      showModal: false
    });
  };

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { redirection, showModal } = this.state;
    const modalDisplay = showModal ? "modal-actived" : "modal-desactived";

    if (redirection === true)
      return <Redirect to={`/company${this.props.idCompany}`} />;

    return (
      <div className="Home">
        <Header openModal={this.openModal} />
        {/* Modal */}
        <div className={modalDisplay}>
          <div className="backgroundModal">
            <div className="modalDIY animated fadeInDown faster">
              <button className="close" onClick={this.openModal}>
                <span>&times;</span>
              </button>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="inputEmail"
                  placeholder="entrer email entreprise"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="inputPassword"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <OrangeButton text="Connection" />
              </form>
              <NavLink to="/newAccountCompagny">Inscription</NavLink>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center text-center m-3 m-md-4">
            <div className="col-12">
              <h5>
                Grâce à un <b>QUESTIONNAIRE</b>,
                <br />
                surprenez par vos réalisations, vos propositions et votre
                imagination
              </h5>
            </div>
            <div className="row m-4">
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_CV" src={icone_CV} alt="Icone CV" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>NI CURRICULUM VITAE</h6>
                  </div>
                </div>
              </div>
              {/* <div className="divider-vertical-home d-none d-md-block" /> */}
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_LM" src={icone_LM} alt="Icone LM" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>NI LETTRE DE MOTIVATION</h6>
                  </div>
                </div>
              </div>
              {/* <div className="divider-vertical-home d-none d-md-block" /> */}
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img
                      className="icone_ALGO"
                      src={icone_ALGO}
                      alt="Icone Algo"
                    />
                  </div>
                  <div className="col-12">
                    <h6>NI ALGORITHME</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h4>
                Et jusqu’à l’entretien d’embauche : <b>l’ANONYMAT</b>
              </h4>
            </div>
          </div>
        </div>
        <SearchOffers />
        <Offers />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idCompany: state.usersInfo.idCompany
});

export default connect(
  mapStateToProps,
  { getIdCompany }
)(Home);
