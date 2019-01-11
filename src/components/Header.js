import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import "./css/Header.scss";

import logo from "../images/Logo.png";
import {
  toggleModalSignInUser,
  toggleModalSignInCompany
} from "../actions/modalsAccountActions";

class Header extends Component {
  state = {
    redirectionHome: false,
    redirectionMySpace: false
  };

  handleClickDeconnexion = () => {
    this.setState({
      redirectionHome: true
    });
    localStorage.clear();
  };
  handleClickMySpace = () => {
    this.setState({
      redirectionMySpace: true
    });
  };

  render() {
    const { toggleModalSignInUser, toggleModalSignInCompany } = this.props;
    const { redirectionHome, redirectionMySpace } = this.state;
    const userType = localStorage.getItem("userType");
    const currentLocation = window.location.pathname;

    if (redirectionHome === true)
      return (
        <Redirect
          to={"/"}
          onLeave={this.setState({ redirectionHome: false })}
        />
      );
    if (redirectionMySpace === true)
      return (
        <Redirect
          to={`/${userType}`}
          onLeave={this.setState({ redirectionMySpace: false })}
        />
      );

    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} alt="Logo" />
            &nbsp; &nbsp;
            <h2 className="d-inline align-middle">Dessine-moi un job</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Button "Connexion" home Menu burger */}
            {userType !== "companies" && userType !== "candidates" && (
              <div>
                <button
                  type="button"
                  className="btn btnMenuBurger d-lg-none m-2"
                  onClick={toggleModalSignInUser}
                >
                  Espace candidat
                </button>
                <button
                  type="button"
                  className="btn btnMenuBurger d-lg-none m-2"
                  onClick={toggleModalSignInCompany}
                >
                  Espace recruteur
                </button>
              </div>
            )}
            {/* Button "Mon espace" home Menu burger */}
            {currentLocation === "/" &&
              (userType === "companies" || userType === "candidates") && (
                <div>
                  <button
                    type="button"
                    className="btn btnMenuBurger d-lg-none m-2"
                    onClick={this.handleClickMySpace}
                  >
                    Accèder à mon espace
                  </button>
                  <button
                    type="button"
                    className="btn btnMenuBurger d-lg-none m-2"
                    onClick={this.handleClickDeconnexion}
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            {/* Button "Deconnexion" espace candidate or company Menu Burger */}
            {(currentLocation === "/companies" ||
              currentLocation === "/candidates") &&
              (userType === "companies" || userType === "candidates") && (
                <div>
                  <button
                    type="button"
                    className="btn btnMenuBurger d-lg-none m-2"
                    onClick={this.handleClickDeconnexion}
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Accueil <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="divider-vertical d-none d-lg-block" />
              <li className="nav-item">
                <a className="nav-link" href="/why">
                  Pourquoi ?
                </a>
              </li>
              <li className="divider-vertical d-none d-lg-block" />
              <li className="nav-item">
                <a className="nav-link" href="/how">
                  Comment postuler ?
                </a>
              </li>
              {/* Button "Connexion" home */}
              {userType !== "companies" && userType !== "candidates" && (
                <div className="btn-group dropleft ml-3 d-none d-lg-block">
                  <button
                    type="button"
                    className="btn"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Connexion
                  </button>
                  <div className="dropdown-menu">
                    <div
                      className="dropdown-item"
                      onClick={toggleModalSignInUser}
                    >
                      Espace candidat
                    </div>
                    <div className="dropdown-divider" />
                    <div
                      className="dropdown-item"
                      onClick={toggleModalSignInCompany}
                    >
                      Espace recruteur
                    </div>
                  </div>
                </div>
              )}
              {/* Button "Mon espace" home */}
              {currentLocation === "/" &&
                (userType === "companies" || userType === "candidates") && (
                  <div className="btn-group dropleft ml-3 d-none d-lg-block">
                    <button
                      type="button"
                      className="btn"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Mon espace
                    </button>
                    <div className="dropdown-menu">
                      <div
                        className="dropdown-item"
                        onClick={this.handleClickMySpace}
                      >
                        Accèder à mon espace
                      </div>
                      <div className="dropdown-divider" />
                      <div
                        className="dropdown-item"
                        onClick={this.handleClickDeconnexion}
                      >
                        Déconnexion
                      </div>
                    </div>
                  </div>
                )}
              {/* Button "Deconnexion" espace candidate or company */}
              {(currentLocation === "/companies" ||
                currentLocation === "/candidates") &&
                (userType === "companies" || userType === "candidates") && (
                  <div className="btn-group dropleft ml-3 d-none d-lg-block">
                    <button
                      type="button"
                      className="btn"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={this.handleClickDeconnexion}
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openModalSignInUser: state.toggleModalsAccount.openModalSignInUser,
  openModalSignInCompany: state.toggleModalsAccount.openModalSignInCompany
});

export default connect(
  mapStateToProps,
  { toggleModalSignInUser, toggleModalSignInCompany }
)(Header);
