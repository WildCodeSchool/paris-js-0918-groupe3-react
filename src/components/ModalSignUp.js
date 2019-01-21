import React, { Component } from "react";
import { connect } from "react-redux";

import {
  toggleModalSignInUser,
  toggleModalSignInCompany,
  toggleModalClose
} from "../actions/modalsAccountActions";
import { signUpUser } from "../actions/connexionUsersActions";

import OrangeButton from "./OrangeButton";

import "./css/ModalSignUp.scss";

class ModalSignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordBis: "",
    description: "",
    name: "",
    siret: "",
    link: "",
    phone: "",
    logo: "",
    showMsgErreurMdp: false
  };

  handleChangeFile = e => this.setState({ logo: e.target.files[0] });
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { password, passwordBis } = this.state;
    const { userType } = this.props;
    if (password === passwordBis) {
      await this.props.signUpUser(this.state, userType);
      this.props.toggleModalClose();
      window.location.reload();
      localStorage.setItem("messageToast", "compteCree");
    } else {
      this.setState({
        showMsgErreurMdp: true
      });
    }
  };

  render() {
    const {
      modalAccountType,
      classDisplaySignUpModal,
      toggleModalSignInUser,
      toggleModalSignInCompany,
      toggleModalClose
    } = this.props;

    const { showMsgErreurMdp } = this.state;

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
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telephone"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="passwordBis"
                        placeholder="Confirmation mot de passe"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    {showMsgErreurMdp && (
                      <div className="col-12 m-1">
                        <p className="msgErreurMdp">
                          Veuillez entrer des mots de passe identiques
                        </p>
                      </div>
                    )}
                    <div className="col-12">
                      <OrangeButton text="Créer mon compte" />
                    </div>
                  </form>
                )}
                {/* Content modal SignUp COMPANY*/}
                {modalAccountType === "COMPANY" && (
                  <form
                    onSubmit={this.handleSubmit}
                    method="post"
                    action="upload"
                    encType="multipart/form-data"
                  >
                    <div className="col-12 mb-2">
                      <h3>Créer mon compte</h3>
                    </div>
                    <div className="col-12 mb-2">
                      <label
                        htmlFor="file-input"
                        className="textLabelFileInput"
                      >
                        Ajouter votre logo
                      </label>
                      <input
                        id="file-input"
                        type="file"
                        name="logo"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={this.handleChangeFile}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nom entreprise"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <textarea
                        type="text"
                        name="description"
                        placeholder="Description entreprise"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="text"
                        name="link"
                        placeholder="Site web"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="text"
                        name="siret"
                        placeholder="SIRET"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="password"
                        name="passwordBis"
                        placeholder="Confirmation mot de passe"
                        onChange={this.handleChange}
                      />
                    </div>
                    {showMsgErreurMdp && (
                      <div className="col-12 m-1">
                        <p className="msgErreurMdp">
                          Veuillez entrer des mots de passe identiques
                        </p>
                      </div>
                    )}
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
  classDisplaySignUpModal: state.toggleModalsAccount.classDisplaySignUpModal,
  id: state.usersInfo.idUser
});

export default connect(
  mapStateToProps,
  {
    // getIdCompany,
    toggleModalSignInUser,
    toggleModalSignInCompany,
    toggleModalClose,
    signUpUser
  }
)(ModalSignUp);
