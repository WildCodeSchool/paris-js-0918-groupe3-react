import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getApplicationsOnOffers } from "../actions/accountCompanyActions";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";

import ApplicationCompany from "./ApplicationCompany";

import iconWaiting from "../images/icons/iconWaiting.png";
import iconValidate from "../images/icons/iconValidate.png";
import iconRefuse from "../images/icons/iconRefuse.png";

import "./css/Applications.scss";

class Applications extends Component {
  componentDidMount = () => {
    this.props.getApplicationsOnOffers(this.props.match.params.idOffer);
  };

  render() {
    const { idOffer } = this.props.match.params;
    const applicationById = sortApplicationsByCandidate(
      this.props.applicationsCompany
    );
    return (
      <div className="Applications container p-4 mt-5 mb-5">
        <div className="row">
          <div className="col">
            <Link to="/companies">
              <p>Retourner sur mon espace</p>
            </Link>
          </div>
        </div>
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
        <div className="row">
          <div className="col">
            {this.props.applicationsCompany[0] &&
              applicationById.map((e, i) => (
                <ApplicationCompany
                  index={i}
                  element={e}
                  idCandidate={applicationById[i].id_candidates}
                  status={applicationById[i].status_application}
                  idOffer={parseInt(idOffer)}
                  key={`ApplicationCompany${i}`}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationsCompany: state.accountCompany.applicationsCompany
});

export default connect(
  mapStateToProps,
  { getApplicationsOnOffers }
)(Applications);
