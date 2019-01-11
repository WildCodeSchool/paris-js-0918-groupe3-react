import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getIdUser } from "../actions/connexionUsersActions";
import {
  toggleModalSignUpUser,
  toggleModalSignUpCompany,
  toggleModalClose
} from "../actions/modalsAccountActions";

import OrangeButton from "./OrangeButton";

import "./css/OrangeButton.scss";
import "./css/ModalSignIn.scss";

class ModalSignIn extends Component {
  state = {
    inputEmail: "",
    inputPassword: "",
    redirection: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { inputEmail, inputPassword } = this.state;
    const { userType } = this.props;
    await this.props.getIdUser(inputEmail, inputPassword, userType);
    this.setState({
      redirection: true
    });
  };
  render() {
    const { redirection } = this.state;
    const {
      modalAccountType,
      classDisplaySignInModal,
      toggleModalSignUpUser,
      toggleModalSignUpCompany,
      toggleModalClose,
      idUser,
      userType
    } = this.props;
    console.log(idUser, "FRONT idUser");


    if (redirection === true && idUser) return <Redirect to={`/${userType}`} />;

    return (
      <div className={classDisplaySignInModal}>
        <div className="ModalSignIn">
          <div className="modal-single animated fadeInDown faster p-2">
            <div className="row">
              <div className="col-12">
                <button className="close" onClick={toggleModalClose}>
                  <span>&times;</span>
                </button>
              </div>
            </div>
            <div className="row p-3 pl-5 pr-5 justify-content-center text-center">
              <div className="row">
                <form onSubmit={this.handleSubmit}>
                  <div className="col-12 mb-3">
                    <h3>Connexion</h3>
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      name="inputEmail"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="password"
                      name="inputPassword"
                      placeholder="Mot de passe"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <OrangeButton text="Connexion" />
                  </div>
                </form>
              </div>
            </div>
            <div className="row align-items-end text-right">
              <div className="col-12">
                {modalAccountType === "USER" && (
                  <span onClick={toggleModalSignUpUser}>Créer mon compte</span>
                )}
                {modalAccountType === "COMPANY" && (
                  <span onClick={toggleModalSignUpCompany}>Créer mon compte</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idUser: state.usersInfo.idUser,
  modalAccountType: state.toggleModalsAccount.modalAccountType,
  classDisplaySignInModal: state.toggleModalsAccount.classDisplaySignInModal
});

export default connect(
  mapStateToProps,
  {
    getIdUser,
    toggleModalClose,
    toggleModalSignUpUser,
    toggleModalSignUpCompany
  }
)(ModalSignIn);
