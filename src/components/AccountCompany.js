import React, { Component } from "react";
import { getOffersCompany } from "../actions/accountCompanyActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import OrangeButton from "./OrangeButton";

import "./css/AccountCompany.scss";
import OfferCompany from "./OfferCompany";
import CompanyInfo from "./CompanyInfo";

class AccountCompany extends Component {
  componentDidMount = () => {
    this.props.getOffersCompany(1);
  };

  render() {
    const { offersList } = this.props;
    const id = localStorage.getItem("idUser");

    return (
      <div className="AccountCompany" aria-hidden="true">
        <div className="container-fluid p-0">
          <CompanyInfo id={id} />
        </div>
        <div className="container mt-5">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <b>Mes annonces</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Archivées</b>
                </a>
              </li>
            </ul>
          </div>
          <div className="row tabsContainer p-3">
            <div className="col-12 text-center">
              <NavLink to="/newOffer">
                <OrangeButton text="Poster une offre" />
              </NavLink>
            </div>
            <div className="col-12">
              {offersList.map((e, i) => (
                <OfferCompany origin="company" data={e} id={e.id} key={e.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offersList: state.accountCompany.offersList
});

export default connect(
  mapStateToProps,
  { getOffersCompany }
)(AccountCompany);
