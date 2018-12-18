import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIdCompany } from "../actions/connexionUsersActions";
import { toggleModalAccount } from "../actions/modalsAccountActions";

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
    const { toggleModalAccount } = this.props;

    if (redirection === true)
      return <Redirect to={`/company${this.props.idCompany}`} />;

    return (
      <div>
        <div className={this.props.modalDisplay}>
          <div className="backgroundModal">
            <div className="modalDIY animated fadeInDown faster p-2">
              <div className="row">
                <div className="col-12">
                  <button className="close" onClick={toggleModalAccount}>
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
                  <NavLink to="/newAccountCompagny">S'inscrire</NavLink>
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
  openModal: state.toggleModalsAccount.openModal
});

export default connect(
  mapStateToProps,
  { getIdCompany, toggleModalAccount }
)(ModalSignIn);
