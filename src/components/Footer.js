import React, { Component } from "react";

import "./css/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer container-fluid p-2 mt-5">
        <div className="row text-center p-3">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="row justify-content-center">
              <div className="col-6 col-md-auto">
                <div className="p-1">
                  <a href="/why">Pourquoi ?</a>
                </div>
              </div>
              <div className="col-6 col-md-auto">
                <div className="p-1">
                  <a href="/how">Comment ?</a>
                </div>
              </div>
              <div className="col-6 col-md-auto">
                <div className="p-1">
                  <a href="#">Nous contacter</a>
                </div>
              </div>
              <div className="col-6 col-md-auto">
                <div className="p-1">
                  <a href="#">Mentions légales</a>
                </div>
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
