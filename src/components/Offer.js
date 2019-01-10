import React, { Component } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import axios from 'axios';

import iconArrow from "../images/icons/iconArrow.png";
import iconStar from "../images/icons/iconStar.png";
import logoCompany from "../images/Icone_ALGO.png";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";

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
    "dimanche",
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
    applicationsCompanyList: [],
    showElement: true
  };

  componentDidMount = () => {
    if (this.props.origin === 'company') {
      this.getApplicationsOnOffers(this.props.id)
    }
  };

  getApplicationsOnOffers = (id) => {
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const token = localStorage.getItem("token");
    const url = `${domain}api/offers/${id}/applications`;
    axios({
      method: 'GET',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        this.setState({
          applicationsCompanyList: res.data
        })
      })
  }

  handleShowElement = () => {
    const { showElement } = this.state;
    this.setState({ showElement: !showElement });
  };

  render() {
    const { data, origin, id } = this.props;
    const { showElement, applicationsCompanyList } = this.state;
    const nbApplications = sortApplicationsByCandidate(applicationsCompanyList).length
    return (
      <div className="Offer container">
        <div className="row align-items-start p-2 m-2">
          {/* Img logo */}
          <div className="col-2 text-right align-self-center">
            <img src={logoCompany} className="logoCompany" alt="logo" />
          </div>
          {/* Body */}
          <div className="col-9">
            <div className={showElement ? "row text-left" : "row text-left mt-3 mt-md-4"}>
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
              {origin === 'company' &&
                <h5>{nbApplications}</h5>}
              {showElement && (
                <div className="col-12 offerResume">
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
              {origin === 'home' &&
                <div className="col-12 text-right">
                  <img src={iconStar} className="iconStar" alt="icone star" />
                  <a href="/" className="textFavoris">
                    Favoris
                </a>
                  &nbsp;&nbsp;
                <Link to={`apply${data.id}`}><OrangeButton text="Postuler" /></Link>
                </div>}
              {(origin === 'company' && nbApplications !== 0) &&
                <div className="col-12 text-right">
                  <Link to={`/offers${id}`}><OrangeButton text="Voir les candidatures" /></Link>
                </div>}
              {origin === 'candidate' &&
                <div className="col-12 text-right">
                  <OrangeButton text="Voir mes réponses" />
                </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer
