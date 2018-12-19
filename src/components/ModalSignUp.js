import React, { Component } from "react";
import OrangeButton from './OrangeButton';

class ModalSignUp extends Component {
  render() {
    return (
      <div>
        <div className="activated">
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
              <button>Valider</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSignUp;
