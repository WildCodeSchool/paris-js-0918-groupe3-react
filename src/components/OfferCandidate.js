import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import dateFormat from "dateformat";
import axios from "axios";
import Popover, { ArrowContainer } from "react-tiny-popover";

import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconWaitingBase from "../images/icons/iconWaitingBase.png";
import iconWaiting from "../images/icons/iconWaiting.png";
import iconValidateBase from "../images/icons/iconValidateBase.png";
import iconValidate from "../images/icons/iconValidate.png";
import iconRefuseBase from "../images/icons/iconRefuseBase.png";
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
    isPopoverWaitingOpen: false,
    isPopoverValidateOpen: false,
    isPopoverRefuseOpen: false,
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

  // Open / close popover icon waiting
  handleWaitingPopover = isPopoverWaitingOpen => {
    this.setState({
      isPopoverWaitingOpen: !isPopoverWaitingOpen
    });
    setTimeout(
      function() {
        this.setState({ isPopoverWaitingOpen: false });
      }.bind(this),
      2500
    );
  };

  // Open / close popover icon validate
  handleValidatePopover = isPopoverValidateOpen => {
    this.setState({
      isPopoverValidateOpen: !isPopoverValidateOpen
    });
    setTimeout(
      function() {
        this.setState({ isPopoverValidateOpen: false });
      }.bind(this),
      2500
    );
  };

  // Open / close popover icon refuse
  handleRefusePopover = isPopoverRefuseOpen => {
    this.setState({
      isPopoverRefuseOpen: !isPopoverRefuseOpen
    });
    setTimeout(
      function() {
        this.setState({ isPopoverRefuseOpen: false });
      }.bind(this),
      2500
    );
  };

  render() {
    const { data, id } = this.props;
    const {
      showElement,
      isPopoverWaitingOpen,
      isPopoverValidateOpen,
      isPopoverRefuseOpen,
      redirectionAnswersCandidate
    } = this.state;
    if (redirectionAnswersCandidate)
      return <Redirect to={`/candidates/answers/offer${id}`} />;
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
                    isOpen={isPopoverWaitingOpen}
                    position={"top"}
                    padding={5}
                    onClickOutside={() =>
                      this.setState({ isPopoverWaitingOpen: false })
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
                              isPopoverWaitingOpen: !isPopoverWaitingOpen
                            })
                          }
                        >
                          Votre candidature est en attente
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    {data.status === "waiting" ? (
                      <div className="col-auto p-2">
                        <img
                          src={iconWaiting}
                          className="icon iconWaiting"
                          alt="icone attente"
                          onClick={() =>
                            this.handleWaitingPopover(isPopoverWaitingOpen)
                          }
                        />
                      </div>
                    ) : (
                      <div className="col-auto p-2">
                        <img
                          src={iconWaitingBase}
                          className="icon iconWaitingBase"
                          alt="icone attente"
                          onClick={() =>
                            this.handleWaitingPopover(isPopoverWaitingOpen)
                          }
                        />
                      </div>
                    )}
                  </Popover>
                  {/* Icone validate */}
                  <Popover
                    isOpen={isPopoverValidateOpen}
                    position={"top"}
                    padding={5}
                    onClickOutside={() =>
                      this.setState({ isPopoverValidateOpen: false })
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
                              isPopoverValidateOpen: !isPopoverValidateOpen
                            })
                          }
                        >
                          Votre candidature est validée
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    {data.status === "validated" ? (
                      <div className="col-auto p-2">
                        <img
                          src={iconValidate}
                          className="icon iconValidate"
                          alt="icone validate"
                          onClick={() =>
                            this.handleValidatePopover(isPopoverValidateOpen)
                          }
                        />
                      </div>
                    ) : (
                      <div className="col-auto p-2">
                        <img
                          src={iconValidateBase}
                          className="icon iconValidateBase"
                          alt="icone validate"
                          onClick={() =>
                            this.handleValidatePopover(isPopoverValidateOpen)
                          }
                        />
                      </div>
                    )}
                  </Popover>
                  {/* Icone Refuse */}
                  <Popover
                    isOpen={isPopoverRefuseOpen}
                    position={"top"}
                    padding={5}
                    onClickOutside={() =>
                      this.setState({ isPopoverRefuseOpen: false })
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
                              isPopoverRefuseOpen: !isPopoverRefuseOpen
                            })
                          }
                        >
                          Votre candidature a été refusé
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    {data.status === "rejected" ? (
                      <div className="col-auto p-2">
                        <img
                          src={iconRefuse}
                          className="icon iconRefuse"
                          alt="icone refuse"
                          onClick={() =>
                            this.handleRefusePopover(isPopoverRefuseOpen)
                          }
                        />
                      </div>
                    ) : (
                      <div className="col-auto p-2">
                        <img
                          src={iconRefuseBase}
                          className="icon iconRefuseBase"
                          alt="icone refuse"
                          onClick={() =>
                            this.handleRefusePopover(isPopoverRefuseOpen)
                          }
                        />
                      </div>
                    )}
                  </Popover>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Collapse Open */}
              <div className="collapse" id={"A" + data.id_offers}>
                <div className="col-10 offset-1 text-justify">
                  <p>{data.description}</p>
                </div>
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
