import React, { Component } from "react";
import { connect } from "react-redux";

import { getCompanyInfo } from "../actions/accountCompanyActions";

import iconEdit from "../images/icons/iconEdit.png";

import "./css/CompanyInfo.scss";

class CompanyInfo extends Component {
  componentDidMount() {
    this.props.getCompanyInfo(this.props.id);
  }

  render() {
    const { name, description, email, siret, link, logo } = this.props.companyInfo;
    console.log(`${process.env.REACT_APP_DOMAIN_PUBLIC}`+logo);

    return (
      <div className="CompanyInfo">
        <div className="container p-3">
          <div className="row align-self-center">
            <div className="col-auto">
              <h4>{name}</h4>
            </div>
            <div className="col-auto">
              <a href="/companies" title="Editer">
                <img src={iconEdit} className="iconEdit" alt="icone editer" />
              </a>
            </div>
          </div>
          <div className="row align-items-center infosDetail">
            <div className="col-4 col-md-2 text-right p-0">
              <img src={`${process.env.REACT_APP_DOMAIN_PUBLIC}`+logo} className="logoCompany" alt="logo" />
            </div>
            <div className="col-8 col-md-5 text-center">
              <p className="m-1">
                <b>E-mail : </b>
                {email}
              </p>
              <p className="m-1">
                <b>Site Web : </b>
                {link}
              </p>
              <p className="m-1">
                <b>Siret : </b>
                {siret}
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="descriptionResume m-1">
                <b>Description : </b>
                {description}
              </p>
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
