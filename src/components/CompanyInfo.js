import React, { Component } from "react";
import { connect } from "react-redux";

import { getCompanyInfo } from "../actions/accountCompanyActions";

import logoCompany from "../images/Icone_ALGO.png";

import "./css/CompanyInfo.scss";

class CompanyInfo extends Component {
  componentDidMount() {
    this.props.getCompanyInfo(this.props.id);
  }

  render() {
    const { name, description, email, siret, link } = this.props.companyInfo;
    return (
      <div className="CompanyInfo">
        <div className="container">
          <div className="row align-items-center mt-3">
            <div className="col-auto">
              <h4>{name}</h4>
            </div>
            <div className="col-2">
              <a href="">Editer</a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-auto col-md-4 text-center">
              <img src={logoCompany} className="logoCompany" alt="logo" />
            </div>
            <div className="col-auto col-md-4">
              <p>E-mail : <b>{email}</b></p>
              <p>Site Web : <b>{link}</b></p>
              <p>Siret : <b>{siret}</b></p>
            </div>
            <div className="col-12 col-md-4">
              <p className="descriptionResume">Description : <b>{description}</b></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companyInfo: state.accountCompany.companyInfo
});

export default connect(
  mapStateToProps,
  { getCompanyInfo }
)(CompanyInfo);
