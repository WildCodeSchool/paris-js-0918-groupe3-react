import React, { Component } from "react";
import $ from 'jquery';

import "./css/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer container-fluid p-2 mt-5">
        <div className="row text-center">
          <div className="col-6 col-md-3 offset-md-3">
            <div className="d-flex flex-column m-1">
              <div className="p-1">
                <h6>
                  <b>Liens utiles</b>
                </h6>
              </div>
              <div className="p-1">
                <a href="/why">Pourquoi ?</a>
              </div>
              <div className="p-1">
                <a href="/how">Comment ?</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column m-1">
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
        <div className="row text-center mt-1">
          <div className="col copyright">
            <p>Copyright © 2019 - Dessine-moi un job</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
