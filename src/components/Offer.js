import React, { Component } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";
import { connect } from "react-redux";

import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconStar from "../images/icons/iconStar.png";

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
    showElement: true
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
    const { data, origin } = this.props;
    const { showElement, contentDescription } = this.state;
    console.log(data);


    return (
      <div className="Offer container">
        <div className="row">
          <div className="col-12 col-md-10">
            <div className="row pt-3 pb-2">
              <div className="col-12 col-md-10 offset-md-2">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      src={`${process.env.REACT_APP_DOMAIN_PUBLIC}` + data.logo}
                      // src={logoCompany}
                      className="logoCompany"
                      alt="logo"
                    />
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-auto">
                        <h6 className="h-100 d-flex justify-content-center flex-column">
                          <b>{`${data.title}`}</b>
                        </h6>
                      </div>
                      <div className="col-auto">
                        <h6 className="nameCompany h-100 d-flex justify-content-center flex-column nameCompany">
                          <span>{`${data.name}`}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-auto">
                        <h6 className="h-100 d-flex justify-content-center flex-column">
                          {" "}
                          {`${data.contract_type}`}
                        </h6>
                      </div>
                      <div className="col-auto">
                        <h6 className="h-100 d-flex justify-content-center flex-column">{`${dateFormat(
                          data.updated_at,
                          "dd-mm-yyyy"
                        )}`}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-3">
              {showElement && (
                <div className="col-12 col-md-9 offset-md-3 offerResume">
                  <span
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                  {/* <p>{data.description}</p> */}
                </div>
              )}
            </div>
            <div className="row">
              {/* Collapse Open */}
              <div
                className="collapse col-12 col-md-9 offset-md-3 text-justify descriptionCompleteOffer"
                id={"A" + data.id}
              >
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
                {/* <p>{data.description}</p> */}
                {origin === "home" &&
                  localStorage.getItem("userType") === "candidates" && (
                    <div className="row align-items-center justify-content-end">
                      <div className="col-auto m-2">
                        <div className="row align-items-center">
                          <img
                            src={iconStar}
                            className="iconStar"
                            alt="icone star"
                          />
                          <a href="/" className="textFavoris">
                            Favoris
                          </a>
                        </div>
                      </div>
                      <div className="col-auto m-2">
                        <Link to={`apply${data.id}`}>
                          <OrangeButton text="Postuler" />
                        </Link>
                      </div>
                    </div>
                  )}
                {!localStorage.getItem("userType") && (
                  <div
                    className="col-12 text-right m-2"
                    onClick={this.props.toggleModalSignInUser}
                  >
                    <OrangeButton text="Connexion" />
                    <p className="infoConnexionPostuler">
                      Vous devez vous connecter pour pouvoir postuler
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Button open collapse */}
          {showElement && (
            <div className="col-12 col-md-1 align-self-center text-center p-2">
              <a
                className=""
                href={"#A" + data.id}
                data-toggle="collapse"
                onClick={this.handleShowElement}
              >
                <img src={iconArrow} alt="icon arrow" className="iconArrow" />
              </a>
            </div>
          )}
          {!showElement && (
            <div className="col-12 col-md-1 align-self-end text-center mb-2 p-3">
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
    );
  }
}

const mapStateToProps = state => ({
  openModalSignInUser: state.toggleModalsAccount.openModalSignInUser
});

export default connect(
  mapStateToProps,
  { toggleModalSignInUser }
)(Offer);
