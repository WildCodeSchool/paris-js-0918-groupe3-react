import React, { Component } from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";


import SearchOffers from "./SearchOffers";
import CarouselCompaniesHome from "./CarouselCompaniesHome";
import Offers from "./Offers";
import CarouselCitations from "./CarouselCitations";

import "./css/Home.scss";
import "./css/OrangeButton.scss";

// import icone_CV from "../images/Icone_CV_No.png";
// import icone_LM from "../images/Icone_LM_No.png";
// import icone_ALGO from "../images/Icone_ALGO_No.png";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home_intro container-fluid p-3 m-0">
          <div className="row justify-content-center text-center p-2">
            <div className="col-12 textIntro">
              <h4>
                Grâce à un <b>QUESTIONNAIRE</b>, surprenez par <br />
                vos <b>réalisations</b>, vos <b>propositions</b> et votre
                <b> imagination</b>
                <br />
                Et jusqu’à l’entretien d’embauche : <b>l’ANONYMAT</b>
              </h4>
            </div>
            <div className="row m-2 m-md-4 textAccroche">
              <div className="col-12 col-md-4 col-lg-auto justify-content-center align-items-center">
                <div className="col-12">
                  <h4>CURRICULUM VITAE ?</h4>
                </div>
                <div className="col-12">
                  <h4 className="verbe">ENVOLÉ</h4>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-auto justify-content-center align-items-center">
                <div className="col-12">
                  <h4>LETTRE DE MOTIVATION ?</h4>
                </div>
                <div className="col-12">
                  <h4 className="verbe">OUBLIÉE</h4>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-auto justify-content-center align-items-center">
                <div className="col-12">
                  <h4>ALGORITHME ?</h4>
                </div>
                <div className="col-12">
                  <h4 className="verbe">DEPASSÉ</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <CarouselCitations />
          </div>
        </div>
        <SearchOffers />
        <CarouselCompaniesHome />
        <Element name="anchorOffer">
          <Offers origin="home" />
        </Element>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Home);
