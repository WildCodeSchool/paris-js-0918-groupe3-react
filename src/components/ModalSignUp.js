import React, { Component } from "react";
import { connect } from "react-redux";

import {
  toggleModalSignInUser,
  toggleModalSignInCompany,
  toggleModalClose
} from "../actions/modalsAccountActions";

import OrangeButton from "./OrangeButton";

import "./css/ModalSignUp.scss";

import iconAdd from "../images/icons/iconAdd.png";

class ModalSignUp extends Component {
  render() {
    const {
      modalAccountType,
      classDisplaySignUpModal,
      toggleModalSignInUser,
      toggleModalSignInCompany,
      toggleModalClose
    } = this.props;

    return (
      <div className={classDisplaySignUpModal}>
        <div className="ModalSignUp">
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
                {/* Content modal SignUp USER*/}
                {modalAccountType === "USER" && (
                  <form onSubmit={this.handleSubmit}>
                    <div className="col-12 mb-3">
                      <h3>Créer mon compte</h3>
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
                        type="text"
                        name="inputTelephone"
                        placeholder="Telephone"
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
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="inputPassword"
                        placeholder="Confirmation mot de passe"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <OrangeButton text="Créer mon compte" />
                    </div>
                  </form>
                )}
                {/* Content modal SignUp COMPANY*/}
                {modalAccountType === "COMPANY" && (
                  <form onSubmit={this.handleSubmit}>
                    <div className="col-12 mb-3">
                      <h3>Créer mon compte</h3>
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="file-input" className="textLabelFileInput" >Ajouter votre logo</label>
                      <input
                        id="file-input"
                        type="file"
                        name="inputLogo"
                        accept="image/png,image/gif,image/jpeg"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="inputNom"
                        placeholder="Nom entreprise"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        type="text"
                        name="inputDescription"
                        placeholder="Description entreprise"
                        onChange={this.handleChange}
                      />
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
                        type="text"
                        name="inputSiteweb"
                        placeholder="Site web"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="inputSIRET"
                        placeholder="SIRET"
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
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="inputPassword"
                        placeholder="Confirmation mot de passe"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <OrangeButton text="Créer mon compte" />
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="row align-items-end text-right">
              <div className="col-12">
                {modalAccountType === "USER" && (
                  <span onClick={toggleModalSignInUser}>
                    J'ai déjà un compte
                  </span>
                )}
                {modalAccountType === "COMPANY" && (
                  <span onClick={toggleModalSignInCompany}>
                    J'ai déjà un compte
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
  // idCompany: state.usersInfo.idCompany,
  modalAccountType: state.toggleModalsAccount.modalAccountType,
  classDisplaySignUpModal: state.toggleModalsAccount.classDisplaySignUpModal
});

export default connect(
  mapStateToProps,
  {
    // getIdCompany,
    toggleModalSignInUser,
    toggleModalSignInCompany,
    toggleModalClose
  }
)(ModalSignUp);
