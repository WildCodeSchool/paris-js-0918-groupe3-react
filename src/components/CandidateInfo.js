import React, { Component } from "react";
import { connect } from "react-redux";

import { getCompanyInfo } from "../actions/accountCompanyActions";

class CandidateInfo extends Component {
  componentDidMount() {
    this.props.getCompanyInfo(this.props.id);
  }

  render() {
    const { email, phone} = this.props.companyInfo;
    return (
      <div className="CandidateInfo">
        <div className="head">
          <h3>Vos informations personnelles : {name}</h3>
          <a href="">Editer</a>
        </div>
        <div className="content">
          <div>
            <p>E-mail : {email}</p>
          </div>
          <div>
            <p>Téléphone : {phone}</p>
            
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
)(CandidateInfo);
