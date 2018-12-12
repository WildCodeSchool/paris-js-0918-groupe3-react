import React, { Component } from "react";

import "./css/Header.scss";

import logo from "../images/Logo.png";


class Header extends Component {


  render() {

    const {openModal} = this.props
    
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
            <button type="button" className="btn btnMenuBurger d-lg-none m-2">Espace candidat</button>
            <button type="button" className="btn btnMenuBurger d-lg-none m-2" onClick={() => openModal("showModalSignIn")}>Espace recruteur</button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Accueil <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="divider-vertical d-none d-lg-block" />
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pourquoi ?
                </a>
            </li>
            <li className="divider-vertical d-none d-lg-block" />
            <li className="nav-item">
              <a className="nav-link" href="/">
                Comment postuler ?
                </a>
            </li>
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
                <a className="dropdown-item" href="/">
                  Espace candidat
                  </a>
                <div className="dropdown-divider" />
                <div className="dropdown-item" onClick={() => openModal("showModalSignIn")} >
                  Espace recruteur
                  </div>
              </div>
            </div>
          </ul>
          </div>
        </nav>
        
      </div >
    );
  }
}

export default Header;
