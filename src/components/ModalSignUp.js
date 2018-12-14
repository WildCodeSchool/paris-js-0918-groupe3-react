import React, { Component } from "react";

class ModalSignUp extends Component {
  render() {
    return (
      <div>
        <div className={modalDisplay}>
          <div className="backgroundModal">
            <div className="modalDIY animated fadeInDown faster">
              <button
                className="close"
                onClick={() => this.openModal("showModalSignUp")}
              >
                <span>&times;</span>
              </button>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="inputEmail"
                  placeholder="entrer email entreprise"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="inputPassword"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <OrangeButton text="Connexion" />
              </form>
              <NavLink to="/newAccountCompagny">Inscription</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSignUp;
