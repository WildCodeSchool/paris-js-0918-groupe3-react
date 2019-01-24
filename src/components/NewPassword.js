import React, { Component } from "react";
import { putNewPassword } from "../actions/connexionUsersActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import OrangeButton from "./OrangeButton";

import "./css/NewPassword.scss";

class NewPassword extends Component {
  state = {
    inputPassword: "",
    inputPasswordBis: "",
    redirection: false,
    showMsgErreurMdp: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { inputPasswordBis, inputPassword } = this.state;
    const { token } = this.props.match.params;
    if (inputPassword === inputPasswordBis) {
      await this.props.putNewPassword(inputPassword, token);
      this.setState({
        redirection: true
      });
      localStorage.setItem("messageToast", "mdpChanged");
      window.location.reload();
    } else {
      this.setState({
        showMsgErreurMdp: true
      });
    }
  };

  render() {
    const { redirection, showMsgErreurMdp } = this.state;
    if (redirection) return <Redirect to="/" />;
    return (
      <div className="NewPassword container mt-3 p-3">
        <div className="row justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div className="col text-center m-3">
              <input
                type="password"
                name="inputPassword"
                placeholder="Mot de passe"
                onChange={this.handleChange}
              />
            </div>
            <div className="col text-center m-3">
              <input
                type="password"
                name="inputPasswordBis"
                placeholder="Confirmer mot de passe"
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
            <div className="col text-center m-3">
              <OrangeButton text="Changer mot de passe" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { putNewPassword }
)(NewPassword);
