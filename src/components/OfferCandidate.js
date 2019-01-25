import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";

import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconWaiting from "../images/icons/iconWaiting.png";
import iconValidate from "../images/icons/iconValidate.png";
import iconRefuse from "../images/icons/iconRefuse.png";

import "./css/OfferCompany.scss";
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

class OfferCandidate extends Component {
  state = {
    applicationsCompanyList: [],
    showElement: true,
    redirectionAnswersCandidate: false
  };

  componentDidMount = () => {
    this.getApplicationsOnOffers(this.props.id);
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
    const { data, id } = this.props;
    const { showElement, redirectionAnswersCandidate } = this.state;
    console.log(data);

    if (redirectionAnswersCandidate)
      return <Redirect to={`/candidates/answers/offer${id}`} />;
    return (
      <div className="OfferCompany container p-3 m-2">
        <div className="row">
          <div className="col-12 col-md-11">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <h6>
                      <b>{`${data.title}`}</b>
                    </h6>
                  </div>
                  <div className="col-auto ">
                    <h6 className="nameCompany">
                      <span>{`${data.companyName}`}</span>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <h6> {`${data.contract_type}`}</h6>
                  </div>
                  <div className="col-auto">
                    <h6>{`${dateFormat(data.updated_at, "dd-mm-yyyy")}`}</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                {/* Icones */}
                <div className="row justify-content-end">
                  {data.status === "waiting" && (
                    <div className="col-auto p-2">
                      <img
                        src={iconWaiting}
                        className="icon"
                        alt="icone attente"
                      />
                    </div>
                  )}
                  {data.status === "validated" && (
                    <div className="col-auto p-2">
                      <img
                        src={iconValidate}
                        className="icon"
                        alt="icone validate"
                      />
                    </div>
                  )}
                  {data.status === "rejected" && (
                    <div className="col-auto p-2">
                      <img
                        src={iconRefuse}
                        className="icon"
                        alt="icone refuse"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* Collapse Open */}
              <div
                className="collapse col-10 offset-1 text-justify descriptionCompleteOffer"
                id={"A" + data.id_offers}
              >
                <span dangerouslySetInnerHTML={{ __html: data.description }} />
                <div
                  className="col-12 text-center text-md-right"
                  onClick={() =>
                    this.setState({ redirectionAnswersCandidate: true })
                  }
                >
                  <OrangeButton text="Voir mes réponse" />
                </div>
              </div>
            </div>
          </div>
          {/* Button open collapse */}
          {showElement && (
            <div className="col-12 col-md-1 align-self-center text-center p-2">
              <a
                className=""
                href={"#A" + data.id_offers}
                data-toggle="collapse"
                onClick={this.handleShowElement}
              >
                <img src={iconArrow} alt="icon arrow" className="iconArrow" />
              </a>
            </div>
          )}
          {!showElement && (
            <div className="col-12 col-md-1 align-self-end text-center mb-2 p-2">
              <a
                href={"#A" + data.id_offers}
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

export default OfferCandidate;
