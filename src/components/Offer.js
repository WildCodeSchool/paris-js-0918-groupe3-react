import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import dateFormat from "dateformat";
import axios from 'axios';
import { connect } from "react-redux";


import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconStar from "../images/icons/iconStar.png";
import logoCompany from "../images/Icone_ALGO.png";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";
import { toggleModalSignInUser } from "../actions/modalsAccountActions";

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
    showElement: true,
    redirectionAnswersCandidate: false
  };

  componentDidMount = () => {
    if (this.props.origin === "company") {
      this.getApplicationsOnOffers(this.props.id);
    }
    
  };

  getApplicationsOnOffers = id => {
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const token = localStorage.getItem("token");
    const url = `${domain}api/offers/${id}/applications`;
    axios({
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      this.setState({
        applicationsCompanyList: res.data
      });
    });
  };

  handleShowElement = () => {
    const { showElement } = this.state;
    this.setState({ showElement: !showElement });
    
  };

  render() {
    const { data, origin, id } = this.props;
    const { showElement, applicationsCompanyList, redirectionAnswersCandidate } = this.state;
    const nbApplications = sortApplicationsByCandidate(applicationsCompanyList)
      .length;
    if(redirectionAnswersCandidate)
     return <Redirect to= {`/candidates/answers/offer${id}`}/>
    return (
      <div className="Offer container">
        <div className="row align-items-center p-2 m-2">
          {/* Img logo */}
          <div className="col-2 text-right align-self-center">
            <img src={logoCompany} className="logoCompany" alt="logo" />
          </div>
          {/* Body */}
          <div className="col-7 col-md-9">
            <div
              className={
                showElement ? "row text-left" : "row text-left mt-2 mt-md-3"
              }
            >
              <div className="col-12">
                <h6>
                  <b>{`${data.title}`}</b>
                </h6>
              </div>
              <div className="col-auto">
                <h6> {`${data.contract_type}`}</h6>
              </div>
              <div className="col-auto">
                <h6>{`${dateFormat(data.updated_at, "dd-mm-yyyy")}`}</h6>
              </div>

              {origin === "company" && <h5>{nbApplications}</h5>}

              {showElement && (
                <div className="col-12 offerResume">
                  <p>{data.description}</p>
                </div>
              )}
            </div>
            {/* <b> | ${data.contract_type} | ${dateFormat(data.updated_at, "dd-mm-yyyy")}`}</b> */}
          </div>
          {/* Button open collapse */}
          {showElement && (
            <div className="col-auto">
              <a
                href={"#A" + data.id}
                data-toggle="collapse"
                onClick={this.handleShowElement}
              >
                <img src={iconArrow} alt="icon arrow" className="iconArrow" />
              </a>
            </div>
          )}
          {/* Collapse Open */}
          <div className="collapse" id={"A" + data.id}>
            <div className="row justify-content-end align-items-center m-2">
              <div className="descriptionCompleteOffer col-10 offset-md-2 col-md-10">
                <p>{data.description}</p>
              </div>

              {(origin === 'home' && localStorage.getItem("userType") === 'candidates') &&
                <div className="col-10 col-sm-auto">

                  <img src={iconStar} className="iconStar" alt="icone star" />
                  <a href="/" className="textFavoris">
                    Favoris
                  </a>
                  &nbsp;&nbsp;
                  <Link to={`apply${data.id}`}>
                    <OrangeButton text="Postuler" />
                  </Link>
                </div>
              }
              {origin === "company" && nbApplications !== 0 && (
                <div className="col-10 col-sm-auto">
                  <Link to={`/offers${id}`}>
                    <OrangeButton text="Voir les candidatures" />
                  </Link>
                </div>
              )}
              {origin === "candidate" &&
                <div className="col-10 col-sm-auto" onClick={() => this.setState({redirectionAnswersCandidate: true})}>
                  <OrangeButton text="Voir mes réponses" />

                </div>
              }
              {!localStorage.getItem("userType") &&
                <div className="col-12 text-right" onClick={this.props.toggleModalSignInUser}>
                  <p>Vous devez vous connecter pour postuler</p>
                  <OrangeButton text="Connexion" />
                </div>
              }
              {!showElement && (
                <div className="col-2 col-sm-auto">
                  <a
                    href={"#A" + data.id}
                    data-toggle="collapse"
                    onClick={this.handleShowElement}
                  >
                    <img
                      src={iconArrowReverse}
                      alt="icon arrow"
                      className="iconArrow"
                    />
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openModalSignInUser: state.toggleModalsAccount.openModalSignInUser,
});

export default connect(
  mapStateToProps,
  { toggleModalSignInUser }
)(Offer);

