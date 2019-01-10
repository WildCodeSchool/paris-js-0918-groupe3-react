import React, { Component } from "react";
import { connect } from "react-redux";

import SearchOffers from "./SearchOffers";
import CarouselCompaniesHome from "./CarouselCompaniesHome";
import Offers from "./Offers";
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";

import { getIdUser } from "../actions/connexionUsersActions";
import {
  toggleModalSignInCompany,
  toggleModalSignInUser
} from "../actions/modalsAccountActions";

import "./css/Home.scss";
import "./css/OrangeButton.scss";

import icone_CV from "../images/Icone_CV_No.png";
import icone_LM from "../images/Icone_LM_No.png";
import icone_ALGO from "../images/Icone_ALGO_No.png";

class Home extends Component {
  render() {
    const {
      modalAccountType,
    } = this.props;
    return (
      <div className="Home">
        {/* Modal USER Sign IN*/}
        {modalAccountType === "USER" && (
          <ModalSignIn
            to={"/newAccountCandidate"}
            redirect={`/candidate${this.props.idUser}`}
            userType="candidates"
          />
        )}
        {/* Modal COMPANY Sign IN */}
        {modalAccountType === "COMPANY" && (
          <ModalSignIn
            to={"/newAccountCompagny"}
            redirect={`/companies${this.props.idUser}`}
            userType="companies"
          />
        )}
        {/* Modal USER Sign UP */}
        {modalAccountType === "USER" && (
          <ModalSignUp
            to={"/newAccountCandidate"}
            redirect={`/candidate${this.props.idUser}`}
            userType="candidates"
          />
        )}
        {/* Modal COMPANY Sign UP */}
        {modalAccountType === "COMPANY" && (
          <ModalSignUp
            to={"/newAccountCompagny"}
            redirect={`/companies${this.props.idUser}`}
            userType="companies"
          />
        )}

        {/* <NavLink to="/newOffer">Poster une offre</NavLink>
        <OrangeButton text="compte entreprise" /> */}
        <div className="Home_intro container-fluid">
          <div className="row justify-content-center text-center p-3 p-md-4">
            <div className="col-12">
              <h5>
                Grâce à un <b>QUESTIONNAIRE</b>,
                <br />
                surprenez par vos <b>réalisations</b>, vos <b>propositions</b>{" "}
                et votre
                <b> imagination</b>
              </h5>
            </div>
            <div className="row m-4">
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_CV" src={icone_CV} alt="Icone CV" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>
                      <b>NI CURRICULUM VITAE</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_LM" src={icone_LM} alt="Icone LM" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>
                      <b>NI LETTRE DE MOTIVATION</b>
                    </h6>
                  </div>
                </div>
              </div>
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
                    <h6>
                      <b>NI ALGORITHME</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h4>
                Et jusqu’à l’entretien d’embauche : <b>l’ANONYMAT</b>
              </h4>
            </div>
          </div>
        </div>
        <SearchOffers />
        <CarouselCompaniesHome />
        <hr />
        <Offers origin='home' />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idUser: state.usersInfo.idUser,
  modalAccountType: state.toggleModalsAccount.modalAccountType,
  classDisplaySignInModal: state.toggleModalsAccount.classDisplaySignInModal,
  classDisplaySignUpModal: state.toggleModalsAccount.classDisplaySignUpModal
});

export default connect(
  mapStateToProps,
  {getIdUser, toggleModalSignInUser, toggleModalSignInCompany }
)(Home);
