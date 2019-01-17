import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/ApplicationCompany.scss";

import OrangeButton from "./OrangeButton";

import iconArrow from "../images/icons/iconArrow.png";
import iconArrowReverse from "../images/icons/iconArrowReverse.png";
import iconWaiting from "../images/icons/iconWaiting.png";
import iconValidate from "../images/icons/iconValidate.png";
import iconRefuse from "../images/icons/iconRefuse.png";

import { putStatusApplication } from "../actions/accountCompanyActions";

class ApplicationCompany extends Component {
  state = {
    showElement: true,
    status: this.props.status
  };

  handleShowElement = () => {
    const { showElement } = this.state;
    this.setState({ showElement: !showElement });
  };

  changeStatus = async status => {
    const { idCandidate, idOffer } = this.props;
    await this.props.putStatusApplication(idOffer, idCandidate, status);
    alert(`Application ${status}`);
    setTimeout(window.location.reload(), 100);
  };

  render() {
    const { showElement, status } = this.state;
    const { index, element } = this.props;
    return (
      <div className="ApplicationCompany container">
        <div className="row align-items-center">
          <div className="col-12 col-md-10">
            <div className="row pt-3 pb-2">
              <div className="col-12 col-md-11 offset-md-1 ">
                <div className="row m-2">
                  <div className="col-auto align-self-center">
                    <i className="titleApplication">{`Candidature n°${index + 1}`}</i>
                  </div>
                  <div className="col-1">
                    {status === "waiting" && (
                      <img
                        src={iconWaiting}
                        className="icon"
                        alt="icone waiting"
                      />
                    )}
                    {status === "validated" && (
                      <img
                        src={iconValidate}
                        className="icon"
                        alt="icone validated"
                      />
                    )}
                    {status === "rejected" && (
                      <img
                        src={iconRefuse}
                        className="icon"
                        alt="icone rejected"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Collapse Open */}
              <div className="collapse" id={"A" + element.id_candidates}>
                <div className="col-12 col-md-11 offset-md-1">
                  {element.QR.map((el, id) => (
                    <div className="col m-2" key={`QR-${id}`}>
                      <h6 className="Questions">{`${id + 1}. ${
                        el.question
                      }`}</h6>
                      <div className="Answers ml-4">
                        <p>{el.reponse}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row align-items-center justify-content-end m-3">
                  <div className="col-6 col-md-auto text-center">
                    <div onClick={() => this.changeStatus("validated")}>
                      <OrangeButton text="Valider" />
                    </div>
                  </div>
                  <div className="col-6 col-md-auto text-center">
                    <div onClick={() => this.changeStatus("rejected")}>
                      <OrangeButton text="Refuser" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button open collapse */}
          {showElement && (
            <div className="col-12 col-md-1 align-self-center text-center p-2">
              <a
                className=""
                href={"#A" + element.id_candidates}
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
                href={"#A" + element.id_candidates}
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { putStatusApplication }
)(ApplicationCompany);
