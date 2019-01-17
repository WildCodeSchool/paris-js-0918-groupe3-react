import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  getIdUser,
  getTokenForNewPassword
} from "../actions/connexionUsersActions";
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
    redirection: false,
    newPassword: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSentMessage = async e => {
    e.preventDefault();
    const { userType, getTokenForNewPassword } = this.props;
    const { inputEmail } = this.state;
    await getTokenForNewPassword(userType, inputEmail);
    this.props.toggleModalClose();
    alert("Un message vous a été envoyé");
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { inputEmail, inputPassword } = this.state;
    const { userType } = this.props;
    await this.props.getIdUser(inputEmail, inputPassword, userType);
    this.setState({
      redirection: true
    });
    this.props.toggleModalClose();
    setTimeout(() => window.location.reload(), 100);
  };

  render() {
    const { redirection, newPassword } = this.state;
    const {
      modalAccountType,
      classDisplaySignInModal,
      toggleModalSignUpUser,
      toggleModalSignUpCompany,
      toggleModalClose,
      idUser,
      userType
    } = this.props;
    if (redirection === true && idUser && userType === "companies")
      return <Redirect to={`/companies${idUser}`} />;

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
            <div className="row justify-content-center text-center">
              <div className="row m-0">
                {!newPassword ? (
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
                ) : (
                  <form onSubmit={this.handleSentMessage} method="POST">
                    <div className="col-8 offset-2 mb-3">
                      <h5>
                        Un e-mail vous sera envoyé pour réinitialiser votre mot
                        de passe
                      </h5>
                    </div>
                    <div className="col-8 offset-2 mb-3">
                      <input
                        type="text"
                        name="inputEmail"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <OrangeButton text="Envoyer" />
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="row align-items-end text-right">
              <div className="col-12">
                {modalAccountType === "USER" && (
                  <span onClick={toggleModalSignUpUser}>Créer mon compte</span>
                )}
                {modalAccountType === "COMPANY" && (
                  <span onClick={toggleModalSignUpCompany}>
                    Créer mon compte
                  </span>
                )}
              </div>
              <div className="col-12">
                {newPassword === false ? (
                  <span
                    onClick={() => this.setState({ newPassword: !newPassword })}
                  >
                    Mot de passe oublié ?
                  </span>
                ) : (
                  <span
                    onClick={() => this.setState({ newPassword: !newPassword })}
                  >
                    Me connecter
                  </span>
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
    toggleModalSignUpCompany,
    getTokenForNewPassword
  }
)(ModalSignIn);
