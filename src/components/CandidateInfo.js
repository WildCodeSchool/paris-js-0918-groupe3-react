import React, { Component } from "react";
import { connect } from "react-redux";

import { getCandidateInfo } from "../actions/accountCandidateActions";

import iconEdit from "../images/icons/iconEdit.png";

import "./css/CandidateInfo.scss";


class CandidateInfo extends Component {
  componentDidMount() {
    this.props.getCandidateInfo(this.props.id);
  }

  render() {
    const { email, phone } = this.props.candidateInfo;
    return (
      <div className="CandidateInfo">
        <div className="container p-3">
          <div className="row align-self-center">
            <div className="col-auto">
              <h5>Vos informations personelles</h5>
            </div>
            <div className="col-auto">
              <a href="/candidates" title="Editer">
                <img src={iconEdit} className="iconEdit" alt="icone editer" />
              </a>
            </div>
          </div>
          <div className="row align-items-center infosDetail">
            <div className="col-12 col-md-6 text-center">
              <p className="m-1">
                <b>E-mail : </b>
                {email}
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <p className="m-1">
                <b>Téléphone : </b>
                {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candidateInfo: state.accountCandidate.candidateInfo
});

export default connect(
  mapStateToProps,
  { getCandidateInfo }
)(CandidateInfo);
