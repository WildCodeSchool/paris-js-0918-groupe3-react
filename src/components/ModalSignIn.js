import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIdCompany } from "../actions/connexionUsersActions";
import {  toggleModaSignUpCompany, toggleModaSignUpUser  } from "../actions/modalsAccountActions";

import OrangeButton from "./OrangeButton";
import "./css/OrangeButton.scss";
import "./css/Modal.scss";

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
    await this.props.getIdCompany(inputEmail, inputPassword);
    this.setState({
      redirection: true
    });
  };
  render() {
    const { redirection } = this.state;
    const { modalToggle } = this.props;

    if (redirection === true) return <Redirect to={this.props.redirect} />;

    return (
      <div>
        <div className={this.props.modalDisplay}>
          <div className="backgroundModal">
            <div className="modalDIY animated fadeInDown faster p-2">
              <div className="row">
                <div className="col-12">
                  <button className="close" onClick={modalToggle}>
                    <span>&times;</span>
                  </button>
                </div>
              </div>
              <div className="row p-3 pl-5 pr-5 justify-content-center text-center">
                <div className="row">
                  <form onSubmit={this.handleSubmit}>
                    <div className="col-12 mb-4">
                      <h3>Connexion</h3>
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        type="text"
                        name="inputEmail"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        type="password"
                        name="inputPassword"
                        placeholder="password"
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
                  <button onClick={this.props.toggleModalSignUp}>
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idCompany: state.usersInfo.idCompany,
  openModalSignInUser: state.toggleModalsAccount.openModalSignInUser,
  openModalSignInCompany: state.toggleModalsAccount.openModalSignInCompany,
  openModalSignUpUser: state.toggleModalsAccount.openModalSignUpUser,
  openModalSignUpCompany: state.toggleModalsAccount.openModalSignUpCompany,
});

export default connect(
  mapStateToProps,
  { getIdCompany,  toggleModaSignUpCompany, toggleModaSignUpUser  }
)(ModalSignIn);
