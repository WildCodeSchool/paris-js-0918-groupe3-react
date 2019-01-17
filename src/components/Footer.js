import React, { Component } from "react";

import "./css/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer container-fluid p-3 mt-3">
        <div className="row text-center ">
          <div className="col-12 col-md-4 offset-md-2">
            <div className="d-flex flex-column m-1 m-md-3">
              <div className="p-1">
                <h6>
                  <b>Liens utiles</b>
                </h6>
              </div>
              <div className="p-1">
                <a href="/why">Pourquoi ?</a>
              </div>
              <div className="p-1">
                <a href="/how">Comment postuler ?</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column m-1 m-md-3">
              <div className="p-1">
                <h6>
                  <b>À propos</b>
                </h6>
              </div>
              <div className="p-1">
                <a href="#">Nous contacter</a>
              </div>
              <div className="p-1">
                <a href="#">Mentions légales</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col copyright">
            <p>Copyright © 2019 - Dessine-moi un job</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
