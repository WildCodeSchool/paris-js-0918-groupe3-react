import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import OfferCandidate from "./OfferCandidate";

import CandidateInfo from "./CandidateInfo";

import { getInfoOffersApplication } from "../actions/accountCandidateActions";

import "./css/AccountCandidate.scss";


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
