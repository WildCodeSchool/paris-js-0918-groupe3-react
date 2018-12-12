import React, { Component } from "react";
import dateFormat from "dateformat";

import iconArrow from "../images/icons/iconArrow.png";
import iconStar from "../images/icons/iconStar.png";
import logoCompany from "../images/Icone_ALGO.png";

import "./css/Offer.scss";
import OrangeButton from "./OrangeButton";

dateFormat.i18n = {
  dayNames: [
    "Dim",
    "Lun",
    "Mar",
    "Mer",
    "Jeu",
    "Ven",
    "Sam",
    "dimanch",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ],
  monthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Aut",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ],
  timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
};

class Offer extends Component {
  state = {
    showElement: true
  };

  handleShowElement = () => {
    const { showElement } = this.state;
    this.setState({ showElement: !showElement });
  };
  render() {
    const { data } = this.props;
    const { showElement } = this.state;

    return (
      <div className="Offer container">
        <div className="row align-items-start p-2 m-2">
          {/* Img logo */}
          <div className="col-2 text-right align-self-center">
            <img src={logoCompany} className="logoCompany" alt="logo" />
          </div>
          {/* Body */}
          <div className="col-9">
              <div className={showElement ? "row text-left" : "row text-left mt-3 mt-md-4" }>
              <div className="col-auto">
                <h6>
                  <b>{`${data.title}`}</b>
                </h6>
              </div>
              <div className="col-1 col-sm-1 col-md-1">
                <h6> {`${data.contract_type}`}</h6>
              </div>
              <div className="col-12 col-sm-12 col-md-auto">
                <h6>{`${dateFormat(data.updated_at, "dd-mm-yyyy")}`}</h6>
              </div>
              {showElement && (
                <div className="offerResume">
                  <p>{data.description}</p>
                </div>
              )}
            </div>
            {/* <b> | ${data.contract_type} | ${dateFormat(data.updated_at, "dd-mm-yyyy")}`}</b> */}
          </div>
          {/* Button open collapse */}
          <div className="col-1 mb-3">
            <a
              href={"#A" + data.id}
              data-toggle="collapse"
              onClick={this.handleShowElement}
            >
              <img src={iconArrow} alt="icon arrow" className="iconArrow" />
            </a>
          </div>
          {/* Collapse Open */}
          <div className="collapse" id={"A" + data.id}>
            <div className="row m-2">
              <div className="descriptionCompleteOffer col-12 offset-md-2 col-md-9">
                <p>{data.description}</p>
              </div>
              <div className="col-12 text-right">
                <img src={iconStar} className="iconStar" alt="icone star" />
                <a href="/" className="textFavoris">
                  Favoris
                </a>
                &nbsp;&nbsp;
                <OrangeButton text="Postuler" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
