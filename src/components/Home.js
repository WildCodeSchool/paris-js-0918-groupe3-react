import React, { Component } from "react";
import { connect } from "react-redux";

import SearchOffers from "./SearchOffers";
import CarouselCompaniesHome from "./CarouselCompaniesHome";
import Offers from "./Offers";

import "./css/Home.scss";
import "./css/OrangeButton.scss";

import icone_CV from "../images/Icone_CV_No.png";
import icone_LM from "../images/Icone_LM_No.png";
import icone_ALGO from "../images/Icone_ALGO_No.png";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <NavLink to="/newOffer">Poster une offre</NavLink>
        <OrangeButton text="compte entreprise" /> */}
        <div className="Home_intro container-fluid">
          <div className="row justify-content-center text-center p-3 p-md-4">
            <div className="col-12">
              <h5>
                Grâce à un <b>QUESTIONNAIRE</b>, surprenez par <br />
                vos <b>réalisations</b>, vos <b>propositions</b> et votre
                <b> imagination</b>
              </h5>
            </div>
            <div className="row m-4">
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_CV" src={icone_CV} alt="Icone CV" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>
                      <span className="ni">NI</span> CURRICULUM VITAE
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img className="icone_LM" src={icone_LM} alt="Icone LM" />
                  </div>
                  <div className="col-12 mb-3">
                    <h6>
                      <span className="ni">NI</span> LETTRE DE MOTIVATION
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 mb-3">
                    <img
                      className="icone_ALGO"
                      src={icone_ALGO}
                      alt="Icone Algo"
                    />
                  </div>
                  <div className="col-12">
                    <h6>
                      <span className="ni">NI</span> ALGORITHME
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h4>
                Et jusqu’à l’entretien d’embauche : <b>l’ANONYMAT</b>
              </h4>
            </div>
          </div>
        </div>
        <SearchOffers />
        <CarouselCompaniesHome />
        <hr/>
        {/* <section id="anchorOffer"> */}
          <Offers origin="home" />
        {/* </section> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  { }
)(Home);
