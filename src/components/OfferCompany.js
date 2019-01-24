import React, { Component } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";
import Popover, { ArrowContainer } from "react-tiny-popover";

import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconOnline from "../images/icons/iconOnline.png";
import iconOffline from "../images/icons/iconOffline.png";
import iconApplicationsBase from "../images/icons/iconApplicationsBase.png";
import iconApplications from "../images/icons/iconApplications.png";
import iconArchive from "../images/icons/iconArchive.png";

import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";

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

class OfferCompany extends Component {
  state = {
    applicationsCompanyList: [],
    showElement: true,
    isPopoverOnlineOpen: false,
    isPopoverApplicationsOpen: false
  };

  componentDidMount = () => {
    this.getApplicationsOnOffers(this.props.id);
  };

  getApplicationsOnOffers = id => {
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const token = localStorage.getItem("token");
    const url = `${domain}offers/${id}/applications`;
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

  // Open / close popover icon online
  handleOnlinePopover = isPopoverOnlineOpen => {
    this.setState({
      isPopoverOnlineOpen: !isPopoverOnlineOpen
    });
    setTimeout(
      function() {
        this.setState({ isPopoverOnlineOpen: false });
      }.bind(this),
      2500
    );
  };

  // Open / close popover icon application
  handleApplicationsPopover = isPopoverApplicationsOpen => {
    this.setState({
      isPopoverApplicationsOpen: !isPopoverApplicationsOpen
    });
    setTimeout(
      function() {
        this.setState({ isPopoverApplicationsOpen: false });
      }.bind(this),
      2500
    );
  };

  render() {
    const { data, id } = this.props;
    const {
      showElement,
      applicationsCompanyList,
      isPopoverOnlineOpen,
      isPopoverApplicationsOpen
    } = this.state;
    console.log(sortApplicationsByCandidate(applicationsCompanyList));
    const nbApplications = sortApplicationsByCandidate(applicationsCompanyList)
      .length;
    const nbApplicationsWaiting = sortApplicationsByCandidate(
      applicationsCompanyList
    ).filter(e => e.status_application === "waiting").length;
    const idCompany = localStorage.getItem("idUser");
    return (
      <div className="OfferCompany container p-2 m-2">
        <div className="row">
          <div className="col-12 col-md-11">
            <div className="row align-items-center p-2">
              <div className="col-auto">
                <div className="row">
                  <div className="col">
                    <h6>
                      <b>{`${data.title}`}</b>
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
                  <Popover
                    isOpen={isPopoverOnlineOpen}
                    position={"top"}
                    padding={5}
                    onClickOutside={() =>
                      this.setState({ isPopoverOnlineOpen: false })
                    }
                    content={({ position, targetRect, popoverRect }) => (
                      <ArrowContainer
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={"#64C4D9"}
                        arrowSize={8}
                      >
                        <div
                          style={{
                            backgroundColor: "#64C4D9",
                            color: "#FFF",
                            padding: "8px",
                            textAlign: "center"
                          }}
                          onClick={() =>
                            this.setState({
                              isPopoverOnlineOpen: !isPopoverOnlineOpen
                            })
                          }
                        >
                          {data.is_published
                            ? "Votre offre est en ligne"
                            : "Votre offre est hors ligne"}
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    {data.is_published ? (
                      <div className="col-auto p-2">
                        <img
                          src={iconOnline}
                          className="icon iconOnline"
                          alt="icone online"
                          onClick={() =>
                            this.handleOnlinePopover(isPopoverOnlineOpen)
                          }
                        />
                      </div>
                    ) : (
                      <div className="col-auto p-2">
                        <img
                          src={iconOffline}
                          className="icon iconOffline"
                          alt="icone offline"
                          onClick={() =>
                            this.handleOnlinePopover(isPopoverOnlineOpen)
                          }
                        />
                      </div>
                    )}
                  </Popover>
                  {/* Icone nombre candidatures */}
                  <Popover
                    isOpen={isPopoverApplicationsOpen}
                    position={"top"}
                    padding={5}
                    onClickOutside={() =>
                      this.setState({ isPopoverApplicationsOpen: false })
                    }
                    content={({ position, targetRect, popoverRect }) => (
                      <ArrowContainer
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={"#64C4D9"}
                        arrowSize={8}
                      >
                        <div
                          style={{
                            backgroundColor: "#64C4D9",
                            color: "#FFF",
                            padding: "8px",
                            textAlign: "center"
                          }}
                          onClick={() =>
                            this.setState({
                              isPopoverApplicationsOpen: !isPopoverApplicationsOpen
                            })
                          }
                        >
                          Vous avez <b>{nbApplicationsWaiting}</b> candidature
                          {nbApplicationsWaiting > 1 ? "s" : ""} en attente
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <div
                      className="col-auto p-2"
                      onClick={() =>
                        this.handleApplicationsPopover(
                          isPopoverApplicationsOpen
                        )
                      }
                    >
                      {nbApplicationsWaiting !== 0 && (
                        <div className="nbApplications">
                          <p>{nbApplicationsWaiting}</p>
                        </div>
                      )}
                      {nbApplications > 0 ? (
                        <img
                          src={iconApplicationsBase}
                          className="icon iconApplications"
                          alt="icone applications"
                        />
                      ) : (
                        <img
                          src={iconApplications}
                          className="icon iconApplications"
                          alt="icone applications"
                        />
                      )}
                    </div>
                  </Popover>
                  <div className="col-auto p-2">
                    <img
                      src={iconArchive}
                      className="icon iconArchive"
                      alt="icone archive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Collapse Open */}
              <div
                className="collapse col-10 offset-1 text-justify descriptionCompleteOffer"
                id={"A" + data.id}
              >
                <span dangerouslySetInnerHTML={{ __html: data.description }} />
                {nbApplications > 0 && (
                  <div className="col-12 text-center text-md-right">
                    <Link to={`/company${idCompany}/offers${id}`}>
                      <OrangeButton text="Voir les candidatures" />
                    </Link>
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
            <div className="col-12 col-md-1 align-self-end text-center mb-2 p-2">
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

export default OfferCompany;
