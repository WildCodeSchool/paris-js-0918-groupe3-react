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
    redirection: false
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
      alert("Votre mot de passe a été changé");
    } else {
      alert("Les mots de passe ne correspondent pas");
    }
  };

  render() {
    const { redirection } = this.state;
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
