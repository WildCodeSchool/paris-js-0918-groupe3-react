import React, { Component } from "react";
import { connect } from "react-redux";
import OfferCandidate from "./OfferCandidate";

import CandidateInfo from "./CandidateInfo";

import { getInfoOffersApplication } from "../actions/accountCandidateActions";

import "./css/AccountCandidate.scss";

import iconWaiting from "../images/icons/iconWaiting.png";
import iconValidate from "../images/icons/iconValidate.png";
import iconRefuse from "../images/icons/iconRefuse.png";

class AccountCandidate extends Component {
  componentDidMount = () => {
    this.props.getInfoOffersApplication();
  };
  render() {
    const id = localStorage.getItem("idUser");
    return (
      <div className="AccountCandidate" aria-hidden="true">
        <div className="container-fluid p-0">
          <CandidateInfo id={id} />
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <b>En cours</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Favoris</b>
                </a>
              </li>
            </ul>
          </div>
          <div className="row tabsContainer p-3">
            <div className="row align-items-center mb-3 ml-3">
              <div className="col-2 col-md-auto p-0 text-center">
                <img src={iconWaiting} className="icon" alt="icone attente" />
              </div>
              <div className="col-9 col-md-auto mr-3 align-self-center">
                <i>En attente</i>
              </div>
              <div className="col-2 col-md-auto p-0 text-center">
                <img src={iconValidate} className="icon" alt="icone validate" />
              </div>
              <div className="col-9 col-md-auto mr-3 align-self-center">
                <i>Validé</i>
              </div>
              <div className="col-2 col-md-auto p-0 text-center">
                <img src={iconRefuse} className="icon" alt="icone refuse" />
              </div>
              <div className="col-9 col-md-auto mr-3 align-self-center">
                <i>Refusé</i>
              </div>
            </div>
            <div className="col-12">
              {this.props.listOfCandidatesApplications.map(e => (
                <OfferCandidate
                  origin="candidate"
                  data={e}
                  id={e.id_offers}
                  key={e.id_offers}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfCandidatesApplications:
    state.accountCandidate.listOfCandidatesApplications
});

export default connect(
  mapStateToProps,
  { getInfoOffersApplication }
)(AccountCandidate);
